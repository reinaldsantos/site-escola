// src/components/ContentUniversal.jsx - VERSÃO COM LINKS PERSONALIZADOS
import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiUniversal from '../hooks/useStrapiUniversal';
import './ContentUniversal.css';

const ContentUniversal = ({ 
  collectionName,
  limit = 3,
  title = null,
  showViewAll = true,
  showDate = true,
  showDescription = true,
  customDetailPage = null,      // Para detalhes
  customViewAllPage = null      // Para "Ver todos"
}) => {
  const { dados: items, campos, carregando } = useStrapiUniversal(collectionName, limit);

  if (carregando) {
    return (
      <div className="content-universal loading">
        <div className="spinner"></div>
        <p>Carregando {collectionName}...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="content-universal empty">
        <h2 className="section-title">
          {title || collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}
        </h2>
        <p className="empty-message">
          Nenhum conteúdo publicado ainda na coleção <strong>{collectionName}</strong>.
          <br />
          <small>
            Publique no <a href="http://localhost:1337/admin" target="_blank" rel="noreferrer">Strapi Admin</a>
          </small>
        </p>
      </div>
    );
  }

  const displayTitle = title ||
    collectionName.charAt(0).toUpperCase() + collectionName.slice(1);

  // Função para extrair valor CORRETA
  const extrairValor = (item, campo) => {
    if (!campo) return null;
    
    // Acessar campo direto ou aninhado
    let valor = item[campo];
    
    // Se não encontrar, tentar em attributes (Strapi v4)
    if (valor === undefined && item.attributes) {
      valor = item.attributes[campo];
    }
    
    return valor;
  };

  // Função para extrair URL da imagem CORRETA
  const extrairImagemUrl = (imagem) => {
    if (!imagem) return null;
    
    // Formato Strapi v4
    if (imagem.data?.attributes?.url) {
      return `http://localhost:1337${imagem.data.attributes.url}`;
    }
    // Formato direto com atributos
    else if (imagem.attributes?.url) {
      return `http://localhost:1337${imagem.attributes.url}`;
    }
    // Formato antigo
    else if (imagem.url) {
      return `http://localhost:1337${imagem.url}`;
    }
    // Formato thumbnail
    else if (imagem.formats?.thumbnail?.url) {
      return `http://localhost:1337${imagem.formats.thumbnail.url}`;
    }
    
    return null;
  };

  // Determinar para onde vai o link de detalhes (botão dentro do card)
  const getDetailPath = () => {
    // Se tiver página customizada definida
    if (customDetailPage) {
      return `/${customDetailPage}`;
    }
    
    // Mapeamento padrão baseado na coleção
    const mapeamento = {
      'noticias': null,          // NOTÍCIAS: NÃO TEM BOTÃO
      'eventos': 'noticias',     // EVENTOS: vai para /noticias (listagem)
      'cursos': 'formacao',      // CURSOS: vai para /formacao (mesmo que "Ver todos")
      'avisos': null             // AVISOS: NÃO TEM BOTÃO
    };
    
    const destino = mapeamento[collectionName];
    return destino ? `/${destino}` : null;
  };

  // Determinar para onde vai o link "Ver todos"
  const getViewAllPath = () => {
    // Se tiver página customizada para "Ver todos"
    if (customViewAllPage) {
      return `/${customViewAllPage}`;
    }
    
    // Mapeamento padrão para "Ver todos"
    const mapeamentoViewAll = {
      'noticias': 'noticias',    // Ver todas notícias → página de notícias
      'eventos': 'noticias',     // Ver todos eventos → página de notícias
      'cursos': 'formacao',      // Ver todos cursos → página de formação
      'avisos': 'noticias'       // Ver todos avisos → página de notícias
    };
    
    return `/${mapeamentoViewAll[collectionName] || collectionName}`;
  };

  // Determinar se deve mostrar botão dentro do card
  const shouldShowCardButton = () => {
    // Só mostra botão para eventos e cursos
    // Notícias e avisos NÃO têm botão
    return collectionName === 'eventos' || collectionName === 'cursos';
  };

  // Determinar o texto do botão
  const getButtonText = () => {
    const textos = {
      'cursos': 'VER CURSOS',
      'eventos': 'VER EVENTOS'
    };
    return textos[collectionName] || 'VER MAIS';
  };

  return (
    <div className="content-universal">
      <h2 className="section-title">
        {displayTitle}
        <span className="badge-count">{items.length}</span>
      </h2>

      <div className="content-grid">
        {items.map(item => {
          // Usar campos detectados CORRETAMENTE
          const titulo = extrairValor(item, campos.titulo) || 'Sem título';
          const conteudo = extrairValor(item, campos.conteudo);
          const data = extrairValor(item, campos.data) || item.createdAt;
          const imagem = extrairValor(item, campos.imagem);
          const local = extrairValor(item, campos.local);
          const horario = extrairValor(item, campos.horario);

          // Extrair URL da imagem
          const imagemUrl = extrairImagemUrl(imagem);

          // Formatar data
          let dataFormatada = '';
          if (data && showDate) {
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

          // Extrair texto do conteúdo
          let textoDescricao = '';
          if (conteudo && showDescription) {
            textoDescricao = extractTextFromContent(conteudo, 100);
          }

          return (
            <div key={item.id} className="content-card">
              {imagemUrl && (
                <div className="card-image-container">
                  <img src={imagemUrl} alt={titulo} className="card-image" />
                  
                  {/* BOTÃO DENTRO DA IMAGEM - Só aparece para eventos e cursos */}
                  {shouldShowCardButton() && getDetailPath() && (
                    <div className="card-overlay">
                      <Link
                        to={getDetailPath()}
                        className="card-link-overlay"
                      >
                        {getButtonText()}
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <div className="card-content">
                {dataFormatada && (
                  <span className="card-date">📅 {dataFormatada}</span>
                )}

                <h3 className="card-title">{titulo}</h3>

                {textoDescricao && (
                  <p className="card-description">{textoDescricao}</p>
                )}

                {/* Campos específicos */}
                <div className="card-details">
                  {local && <span className="detail-item">📍 {local}</span>}
                  {horario && <span className="detail-item">⏰ {horario}</span>}
                </div>

                {/* BOTÃO PARA CARDS SEM IMAGEM - Só aparece para eventos e cursos */}
                {!imagemUrl && shouldShowCardButton() && getDetailPath() && (
                  <div className="card-footer">
                    <Link
                      to={getDetailPath()}
                      className="card-link-inside"
                    >
                      {getButtonText()}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showViewAll && items.length > 0 && (
        <div className="view-all-section">
          {/* LINK "VER TODOS" - Usa getViewAllPath() */}
          <Link to={getViewAllPath()} className="btn-view-all">
            📄 Ver todos os {collectionName}
          </Link>
        </div>
      )}
    </div>
  );
};

// Função para extrair texto de qualquer tipo de conteúdo
const extractTextFromContent = (content, maxLength = 100) => {
  if (!content) return '';

  // Se for string
  if (typeof content === 'string') {
    return content.length > maxLength
      ? content.substring(0, maxLength) + '...'
      : content;
  }

  // Se for array (rich text do Strapi)
  if (Array.isArray(content)) {
    let text = '';
    for (const block of content) {
      if (block.type === 'paragraph' && block.children) {
        for (const child of block.children) {
          if (child.type === 'text' && child.text) {
            text += child.text + ' ';
          }
        }
      }
    }
    text = text.trim();
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  }

  // Se for objeto, tentar converter para string
  if (typeof content === 'object') {
    try {
      const text = JSON.stringify(content).replace(/[{}"\[\]]/g, ' ');
      return text.length > maxLength
        ? text.substring(0, maxLength) + '...'
        : text;
    } catch (e) {
      return 'Conteúdo disponível...';
    }
  }

  return 'Conteúdo disponível...';
};

export default ContentUniversal;



