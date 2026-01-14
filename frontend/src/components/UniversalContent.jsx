// src/components/UniversalContent.jsx - VERSÃO CORRIGIDA
import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';

const UniversalContent = ({ 
  collectionName,
  limit = 3,
  title = null,
  showViewAll = true
}) => {
  const { dados: items, carregando } = useStrapiData(collectionName, limit);
  
  if (carregando) {
    return <div className="loading">Carregando {collectionName}...</div>;
  }
  
  if (items.length === 0) {
    return (
      <div className="universal-content">
        <h2 className="section-title">
          {title || collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}
        </h2>
        <p className="no-content">Nenhum conteúdo publicado ainda.</p>
      </div>
    );
  }
  
  const displayTitle = title || 
    collectionName.charAt(0).toUpperCase() + collectionName.slice(1);
  
  return (
    <div className="universal-content">
      <h2 className="section-title">
        {displayTitle} 
      </h2>
      
      <div className="content-grid">
        {items.map(item => {
          console.log(`Item ${collectionName}:`, item); // Para debug
          
          // CORREÇÃO: Formato específico para suas coleções
          let titulo = item.titulo || item.nome || item.title || 'Sem título';
          let descricao = item.descricao || item.conteudo || null;
          let data = item.data || item.createdAt || item.data_publicacao;
          let imagem = item.imagem || item.foto || null;
          
          // Extrair imagem se existir (formato Strapi v5)
          let imagemUrl = null;
          if (imagem?.data?.attributes?.url) {
            imagemUrl = `http://localhost:1338${imagem.data.attributes.url}`;
          } else if (imagem?.url) {
            imagemUrl = `http://localhost:1338${imagem.url}`;
          }
          
          // Formatar data corretamente
          let dataFormatada = 'Data não disponível';
          if (data) {
            try {
              const dataObj = new Date(data);
              if (!isNaN(dataObj.getTime())) {
                dataFormatada = dataObj.toLocaleDateString('pt-PT', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                });
              }
            } catch (e) {
              console.error('Erro ao formatar data:', e);
            }
          }
          
          // Extrair texto da descrição
          let textoDescricao = '';
          if (descricao) {
            if (typeof descricao === 'string') {
              textoDescricao = descricao.length > 100 ? descricao.substring(0, 100) + '...' : descricao;
            } else if (Array.isArray(descricao)) {
              // Se for rich text do Strapi
              textoDescricao = extrairTextoRichText(descricao, 100);
            }
          }
          
          return (
            <div key={item.id} className="content-card">
              {imagemUrl && (
                <div className="card-image">
                  <img src={imagemUrl} alt={titulo} />
                </div>
              )}
              
              <div className="card-body">
                <span className="card-date">📅 {dataFormatada}</span>
                <h3 className="card-title">{titulo}</h3>
                
                {textoDescricao && (
                  <p className="card-description">{textoDescricao}</p>
                )}
                
                <Link to={`/${collectionName}/${item.id}`} className="card-link">
                  Ler mais →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      
      {showViewAll && items.length > 0 && (
        <div className="view-all">
          <Link to={`/${collectionName}`} className="btn-view-all">
            📄 Ver todos os {collectionName}
          </Link>
        </div>
      )}
    </div>
  );
};

// Função para extrair texto de rich text do Strapi
const extrairTextoRichText = (richText, maxLength = 100) => {
  if (!Array.isArray(richText)) return '';
  
  let texto = '';
  for (const bloco of richText) {
    if (bloco.type === 'paragraph' && bloco.children) {
      for (const child of bloco.children) {
        if (child.type === 'text' && child.text) {
          texto += child.text + ' ';
        }
      }
    }
  }
  
  texto = texto.trim();
  if (texto.length > maxLength) {
    texto = texto.substring(0, maxLength) + '...';
  }
  
  return texto;
};

export default UniversalContent;
