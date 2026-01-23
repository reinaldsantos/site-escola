// src/components/ContentUniversal.jsx - VERSÃO FINAL CORRIGIDA
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
            Publique no <a href="https://strapi-definitivo.onrender.com/admin" target="_blank" rel="noreferrer">Strapi Admin</a>
          </small>
        </p>
      </div>
    );
  }

  const displayTitle = title ||
    collectionName.charAt(0).toUpperCase() + collectionName.slice(1);

  // CORREÇÃO: Função MELHORADA para extrair valor
  const extrairValor = (item, campo) => {
    if (!campo) return null;
    
    console.log(`🔍 Extraindo campo "${campo}" do item:`, item.id);
    
    // 1. Primeiro, tentar no item diretamente
    if (item[campo] !== undefined) {
      console.log(`✅ Campo "${campo}" encontrado diretamente:`, item[campo]);
      return item[campo];
    }
    
    // 2. Tentar com nomes alternativos
    const alternativos = {
      'titulo': ['title', 'nome', 'name'],
      'conteudo': ['content', 'descricao', 'description', 'texto', 'text'],
      'imagem': ['image', 'foto', 'photo', 'capa', 'cover', 'banner', 'thumbnail'],
      'data': ['date', 'data_publicacao', 'data_evento', 'data_hora', 'publishedAt']
    };
    
    if (alternativos[campo]) {
      for (const alternativo of alternativos[campo]) {
        if (item[alternativo] !== undefined) {
          console.log(`✅ Campo "${campo}" encontrado como "${alternativo}":`, item[alternativo]);
          return item[alternativo];
        }
      }
    }
    
    console.log(`❌ Campo "${campo}" não encontrado`);
    return null;
  };

  // CORREÇÃO: Função MELHORADA para extrair URL da imagem
  const extrairImagemUrl = (item) => {
    if (!item) return null;
    
    console.log(`🔍 Extraindo imagem do item:`, item.id, item.titulo || item.nome);
    
    const BASE_URL = "https://strapi-definitivo.onrender.com";
    
    // 1. Se já tem imagemUrl do hook (CASO MAIS COMUM - FUNCIONA!)
    if (item.imagemUrl) {
      console.log('✅ imagemUrl do hook:', item.imagemUrl);
      return item.imagemUrl;
    }
    
    // 2. Verificar TODOS os campos possíveis de imagem
    const camposImagem = [
      'imagem', 'image', 'foto', 'photo', 
      'capa', 'cover', 'banner', 'thumbnail'
    ];
    
    for (const campo of camposImagem) {
      const valor = item[campo];
      
      if (valor) {
        console.log(`📸 Campo "${campo}" encontrado:`, valor);
        
        // Se for string (URL direta)
        if (typeof valor === 'string') {
          if (valor.startsWith('http')) {
            console.log(`✅ URL direta em "${campo}":`, valor);
            return valor;
          } else if (valor.startsWith('/')) {
            const url = `${BASE_URL}${valor}`;
            console.log(`✅ URL relativa em "${campo}":`, url);
            return url;
          }
        }
        
        // Se for objeto com URL
        if (valor.url) {
          const url = valor.url.startsWith('http') ? valor.url : `${BASE_URL}${valor.url}`;
          console.log(`✅ URL em "${campo}.url":`, url);
          return url;
        }
        
        // Se for objeto com data.attributes
        if (valor.data?.attributes?.url) {
          const url = `${BASE_URL}${valor.data.attributes.url}`;
          console.log(`✅ URL em "${campo}.data.attributes.url":`, url);
          return url;
        }
        
        // Se tem thumbnail
        if (valor.formats?.thumbnail?.url) {
          const url = `${BASE_URL}${valor.formats.thumbnail.url}`;
          console.log(`✅ URL thumbnail em "${campo}":`, url);
          return url;
        }
      }
    }
    
    // 3. Se for evento, verificar se tem banner específico
    if (collectionName === 'eventos') {
      console.log('🔍 Procurando banner em eventos...');
      
      // Eventos podem ter a imagem em campos diferentes
      const camposEvento = ['banner', 'imagem_evento', 'event_image'];
      
      for (const campo of camposEvento) {
        if (item[campo]?.url) {
          const url = item[campo].url.startsWith('http') 
            ? item[campo].url 
            : `${BASE_URL}${item[campo].url}`;
          console.log(`✅ Banner encontrado em "${campo}":`, url);
          return url;
        }
      }
    }
    
    // 4. Se for curso, verificar campo específico
    if (collectionName === 'cursos') {
      console.log('🔍 Procurando imagem em cursos...');
      
      if (item.logo?.url) {
        const url = item.logo.url.startsWith('http')
          ? item.logo.url
          : `${BASE_URL}${item.logo.url}`;
        console.log('✅ Logo do curso encontrada:', url);
        return url;
      }
    }
    
    console.log('❌ Nenhuma imagem encontrada');
    return null;
  };

  // Determinar para onde vai o link de detalhes (botão dentro do card)
  const getDetailPath = (item) => {
    // Se tiver página customizada definida
    if (customDetailPage) {
      return `/${customDetailPage}`;
    }
    
    // Mapeamento padrão baseado na coleção
    const mapeamento = {
      'noticias': 'noticias',
      'eventos': 'noticias',  // Eventos vão para /noticias com aba eventos
      'cursos': 'cursos',     // Cursos vão para página própria
      'avisos': 'noticias'    // Avisos vão para /noticias com aba avisos
    };
    
    const destino = mapeamento[collectionName];
    return destino ? `/${destino}/${item.id}` : null;
  };

  // Determinar para onde vai o link "Ver todos"
  const getViewAllPath = () => {
    // Se tiver página customizada para "Ver todos"
    if (customViewAllPage) {
      return `/${customViewAllPage}`;
    }
    
    // Mapeamento padrão para "Ver todos"
    const mapeamentoViewAll = {
      'noticias': 'noticias',
      'eventos': 'noticias',
      'cursos': 'cursos',
      'avisos': 'noticias'
    };
    
    return `/${mapeamentoViewAll[collectionName] || collectionName}`;
  };

  // Determinar se deve mostrar botão dentro do card
  const shouldShowCardButton = () => {
    return collectionName === 'eventos' || collectionName === 'cursos';
  };

  // Determinar o texto do botão
  const getButtonText = () => {
    const textos = {
      'cursos': 'VER CURSO',
      'eventos': 'VER EVENTO'
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
          // Extrair valores usando a função melhorada
          const titulo = extrairValor(item, 'titulo') || item.titulo || item.nome || item.title || 'Sem título';
          const conteudo = extrairValor(item, 'conteudo') || item.conteudo || item.descricao || item.content || '';
          const data = extrairValor(item, 'data') || item.data || item.data_publicacao || item.data_hora || item.data_evento || item.createdAt;
          const local = extrairValor(item, 'local') || item.local;
          const horario = extrairValor(item, 'horario') || item.horario;
          
          // CORREÇÃO: Usar a nova função extrairImagemUrl
          const imagemUrl = extrairImagemUrl(item);

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

          // CORREÇÃO: Link de detalhe específico por item
          const detailPath = getDetailPath(item);

          return (
            <div key={item.id} className="content-card" data-collection={collectionName}>
              <div className="card-image-container">
                {imagemUrl ? (
                  <img 
                    src={imagemUrl} 
                    alt={titulo} 
                    className="card-image"
                    onError={(e) => {
                      console.error(`❌ Erro ao carregar imagem: ${imagemUrl}`);
                      e.target.style.display = 'none';
                      
                      // Mostrar placeholder
                      const placeholder = document.createElement('div');
                      placeholder.className = 'image-error-placeholder';
                      placeholder.innerHTML = `
                        <div class="placeholder-icon">
                          ${collectionName === 'eventos' ? '📅' : 
                            collectionName === 'cursos' ? '🎓' : 
                            collectionName === 'avisos' ? '⚠️' : '📰'}
                        </div>
                        <div class="placeholder-text">${collectionName.toUpperCase()}</div>
                      `;
                      e.target.parentElement.appendChild(placeholder);
                    }}
                    onLoad={() => {
                      console.log(`✅ Imagem carregada: ${titulo} (${collectionName})`);
                    }}
                  />
                ) : (
                  <div className="image-placeholder-default">
                    <div className="placeholder-icon">
                      {collectionName === 'eventos' ? '📅' : 
                       collectionName === 'cursos' ? '🎓' : 
                       collectionName === 'avisos' ? '⚠️' : '📰'}
                    </div>
                    <div className="placeholder-text">{collectionName.toUpperCase()}</div>
                  </div>
                )}
                
                {/* BOTÃO DENTRO DA IMAGEM - Só aparece para eventos e cursos */}
                {shouldShowCardButton() && detailPath && (
                  <div className="card-overlay">
                    <Link to={detailPath} className="card-link-overlay">
                      {getButtonText()}
                    </Link>
                  </div>
                )}
              </div>

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
                  
                  {/* Informações específicas por coleção */}
                  {collectionName === 'cursos' && item.duracao && (
                    <span className="detail-item">⏱️ {item.duracao}</span>
                  )}
                  {collectionName === 'cursos' && item.nivel && (
                    <span className="detail-item">📊 {item.nivel}</span>
                  )}
                  {collectionName === 'eventos' && item.vagas && (
                    <span className="detail-item">🎫 {item.vagas} vagas</span>
                  )}
                </div>

                {/* BOTÃO FORA DA IMAGEM para detalhes */}
                {detailPath && !shouldShowCardButton() && (
                  <div className="card-footer">
                    <Link to={detailPath} className="card-link-inside">
                      Ver detalhes →
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
          <Link to={getViewAllPath()} className="btn-view-all">
            👁️ Ver todos os {collectionName}
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