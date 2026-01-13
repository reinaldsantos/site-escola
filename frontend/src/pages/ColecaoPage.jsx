// ============================================
// PÁGINA: ColecaoPage.jsx
// Mostra QUALQUER coleção do Strapi automaticamente
// ============================================

import React from 'react';
import { useParams } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';
import { strapiService } from '../services/strapiService';
import './ColecaoPage.css';

const ColecaoPage = () => {
  const { colecao } = useParams(); // Pega o nome da coleção da URL
  
  // Busca os dados da coleção automaticamente
  const { dados, loading, error } = useStrapiData(colecao, {
    sort: 'createdAt:desc',
    pagination: { pageSize: 50 }
  });
  
  // Títulos amigáveis para cada coleção
  const titulos = {
    noticias: 'Notícias',
    eventos: 'Eventos',
    cursos: 'Cursos',
    professores: 'Professores',
    alunos: 'Alunos',
    projetos: 'Projetos',
    galeria: 'Galeria de Fotos'
    // Adicione mais conforme criar novas coleções
  };
  
  if (loading) {
    return (
      <div className="colecao-container">
        <div className="loading-colecao">Carregando {titulos[colecao] || colecao}...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="colecao-container">
        <div className="error-colecao">
          Erro ao carregar {titulos[colecao] || colecao}: {error}
        </div>
      </div>
    );
  }
  
  return (
    <div className="colecao-container">
      <h1 className="colecao-titulo">
        {titulos[colecao] || colecao.charAt(0).toUpperCase() + colecao.slice(1)}
      </h1>
      
      {dados.length === 0 ? (
        <div className="colecao-vazia">
          Nenhum item encontrado em {titulos[colecao] || colecao}.
        </div>
      ) : (
        <div className="colecao-grid">
          {dados.map(item => {
            // Tenta encontrar uma imagem em qualquer campo
            let imagemUrl = null;
            for (const key in item) {
              if (item[key] && typeof item[key] === 'object' && item[key].url) {
                imagemUrl = strapiService.getImagemUrl(item[key]);
                if (imagemUrl) break;
              }
            }
            
            // Tenta encontrar um título em qualquer campo
            const titulo = item.titulo || item.nome || item.title || `Item ${item.id}`;
            
            // Tenta encontrar uma descrição
            let descricao = '';
            for (const key in item) {
              if (key.includes('descricao') || key.includes('conteudo') || key.includes('texto')) {
                if (Array.isArray(item[key])) {
                  descricao = strapiService.extrairTexto(item[key], 100);
                } else if (typeof item[key] === 'string') {
                  descricao = item[key].substring(0, 100) + '...';
                }
                if (descricao) break;
              }
            }
            
            return (
              <div key={item.id} className="colecao-item">
                {imagemUrl && (
                  <img 
                    src={imagemUrl} 
                    alt={titulo}
                    className="colecao-imagem"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                <div className="colecao-conteudo">
                  <h3>{titulo}</h3>
                  {descricao && <p className="colecao-descricao">{descricao}</p>}
                  <div className="colecao-data">
                    {item.createdAt && new Date(item.createdAt).toLocaleDateString('pt-PT')}
                  </div>
                  <button 
                    className="colecao-btn-detalhes"
                    onClick={() => alert(`Detalhes do item ${item.id}\nColeção: ${colecao}`)}
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ColecaoPage;
