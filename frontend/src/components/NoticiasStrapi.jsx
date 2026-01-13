// src/components/NoticiasStrapi.jsx - VERSÃO UNIVERSAL
import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';
import { strapiService } from '../services/strapiService';
import './NoticiasStrapi.css';

const NoticiasStrapi = ({ 
  limite = 3, 
  mostrarTitulo = true,
  titulo = null,
  colecao = 'noticias'  // NOVO: Pode ser 'eventos', 'noticias', etc
}) => {
  const { dados: itens, carregando } = useStrapiData(colecao, limite);
  
  // Título padrão baseado na coleção
  const tituloExibicao = titulo || (
    colecao === 'eventos' ? '📅 PRÓXIMOS EVENTOS' : '📰 ÚLTIMAS NOTÍCIAS'
  );
  
  // Se não quiser mostrar quando não há dados
  if (!carregando && itens.length === 0) {
    return null;
  }
  
  return (
    <div className={`noticias-strapi ${colecao}-container`}>
      {mostrarTitulo && (
        <h2 className="noticias-titulo">{tituloExibicao}</h2>
      )}
      
      {carregando ? (
        <div className="noticias-carregando">
          <p>Carregando {colecao}...</p>
        </div>
      ) : (
        <div className="noticias-grid">
          {itens.map(item => {
            // Imagem
            const imagemUrl = strapiService.getImagemUrl(item.imagem);
            
            // Data formatada
            let dataFormatada = 'Data não disponível';
            if (item.data || item.createdAt) {
              try {
                const dataObj = new Date(item.data || item.createdAt);
                if (!isNaN(dataObj.getTime())) {
                  dataFormatada = dataObj.toLocaleDateString('pt-PT', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short'
                  });
                }
              } catch (e) {
                console.error('Erro ao formatar data:', e);
              }
            }
            
            // Título
            const tituloItem = item.titulo || item.nome || 'Sem título';
            
            // Descrição
            let descricaoTexto = '';
            if (item.descricao) {
              if (typeof item.descricao === 'string') {
                descricaoTexto = item.descricao.substring(0, 80) + '...';
              } else {
                descricaoTexto = strapiService.extrairTexto(item.descricao, 80);
              }
            }
            
            return (
              <div key={item.id} className="noticia-card">
                {imagemUrl && (
                  <div className="noticia-imagem">
                    <img src={imagemUrl} alt={tituloItem} />
                  </div>
                )}
                
                <div className="noticia-conteudo">
                  <span className="noticia-data">{dataFormatada}</span>
                  <h3 className="noticia-titulo">{tituloItem}</h3>
                  
                  {descricaoTexto && (
                    <p className="noticia-descricao">{descricaoTexto}</p>
                  )}
                  
                  {/* Campos específicos para eventos */}
                  {colecao === 'eventos' && (
                    <div className="evento-detalhes">
                      {item.local && (
                        <span className="evento-local">📍 {item.local}</span>
                      )}
                      {item.horario && (
                        <span className="evento-horario">⏰ {item.horario}</span>
                      )}
                    </div>
                  )}
                  
                  <Link 
                    to={`/${colecao}/${item.id}`} 
                    className="noticia-link"
                  >
                    {colecao === 'eventos' ? 'Mais informações →' : 'Ler mais →'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {!carregando && itens.length > 0 && (
        <div className="noticias-ver-todos">
          <Link to={`/${colecao}`} className="btn-ver-noticias">
            {colecao === 'eventos' ? '📅 Ver todos os eventos' : '📰 Ver todas as notícias'}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NoticiasStrapi;
