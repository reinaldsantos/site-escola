import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./NoticiaDetailPage.css";

const NoticiaDetailPage = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Base URL do novo Strapi - CORRIGIDA para usar plural
  const STRAPI_BASE_URL = "https://strapi-definitivo.onrender.com";

  useEffect(() => {
    const buscarNoticia = async () => {
      try {
        setCarregando(true);
        // CORRETO: usar plural 'noticias'
        const response = await fetch(`${STRAPI_BASE_URL}/api/noticias/${id}?populate=*`);
        
        if (!response.ok) {
          throw new Error("Notícia não encontrada");
        }
        
        const data = await response.json();
        setNoticia(data.data);
      } catch (error) {
        setErro(error.message);
        console.error("Erro ao buscar notícia:", error);
      } finally {
        setCarregando(false);
      }
    };

    buscarNoticia();
  }, [id]);

  if (carregando) {
    return (
      <div className="noticia-detail-container loading">
        <div className="spinner"></div>
        <p>Carregando notícia...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="noticia-detail-container error">
        <h1>Erro</h1>
        <p>{erro}</p>
        <Link to="/noticias" className="btn-voltar">
          ← Voltar para Notícias
        </Link>
      </div>
    );
  }

  if (!noticia) {
    return (
      <div className="noticia-detail-container not-found">
        <h1>Notícia não encontrada</h1>
        <p>A notícia que você está procurando não existe ou foi removida.</p>
        <Link to="/noticias" className="btn-voltar">
          ← Voltar para Notícias
        </Link>
      </div>
    );
  }

  const { attributes } = noticia;
  const titulo = attributes?.titulo || "Sem título";
  const conteudo = attributes?.conteudo || "";
  const data = attributes?.data_publicacao || attributes?.createdAt;
  
  // Extrair URL da imagem
  let imagemUrl = null;
  
  if (attributes?.imagem?.data?.attributes?.url) {
    imagemUrl = `${STRAPI_BASE_URL}${attributes.imagem.data.attributes.url}`;
  } 
  else if (attributes?.image?.data?.attributes?.url) {
    imagemUrl = `${STRAPI_BASE_URL}${attributes.image.data.attributes.url}`;
  }
  else if (attributes?.capa?.data?.attributes?.url) {
    imagemUrl = `${STRAPI_BASE_URL}${attributes.capa.data.attributes.url}`;
  }
  else if (attributes?.foto?.data?.attributes?.url) {
    imagemUrl = `${STRAPI_BASE_URL}${attributes.foto.data.attributes.url}`;
  }
  else if (attributes?.thumbnail?.data?.attributes?.url) {
    imagemUrl = `${STRAPI_BASE_URL}${attributes.thumbnail.data.attributes.url}`;
  }

  // Formatar data
  let dataFormatada = "";
  if (data) {
    try {
      const dataObj = new Date(data);
      if (!isNaN(dataObj.getTime())) {
        dataFormatada = dataObj.toLocaleDateString('pt-PT', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    } catch (e) {
      console.error('Erro ao formatar data:', e);
    }
  }

  const handleCompartilhar = () => {
    if (navigator.share) {
      navigator.share({
        title: titulo,
        text: `Confira esta notícia da EPF: ${titulo}`,
        url: window.location.href,
      })
      .catch(error => console.log('Erro ao compartilhar:', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copiado para a área de transferência!'))
        .catch(err => console.error('Erro ao copiar link:', err));
    }
  };

  return (
    <div className="noticia-detail-container">
      <article className="noticia-detail">
        <Link to="/noticias" className="btn-voltar">
          ← Voltar para Notícias
        </Link>
        
        {imagemUrl && (
          <div className="noticia-imagem-principal">
            <img 
              src={imagemUrl} 
              alt={titulo} 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('sem-imagem');
              }}
            />
          </div>
        )}

        <header className="noticia-header">
          {dataFormatada && (
            <time className="noticia-data" dateTime={data}>
              📅 Publicado em {dataFormatada}
            </time>
          )}
          
          <h1 className="noticia-titulo">{titulo}</h1>
          
          <div className="noticia-meta">
            <span className="badge-tipo">📰 Notícia</span>
            {attributes?.autor && (
              <span className="noticia-autor">✍️ Por {attributes.autor}</span>
            )}
          </div>
        </header>

        <div className="noticia-conteudo">
          {renderConteudo(conteudo, STRAPI_BASE_URL)}
        </div>

        <footer className="noticia-footer">
          <div className="acoes">
            <Link to="/noticias" className="btn-acao">
              📰 Ver todas as notícias
            </Link>
            <button className="btn-acao compartilhar" onClick={handleCompartilhar}>
              📤 Compartilhar
            </button>
          </div>
          
          <div className="tags">
            {attributes?.tags && Array.isArray(attributes.tags) && attributes.tags.length > 0 && (
              <div className="tags-container">
                <span className="tags-label">🏷️ Tags:</span>
                {attributes.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </footer>
      </article>
    </div>
  );
};

// Função para renderizar conteúdo (suporta rich text do Strapi)
const renderConteudo = (conteudo, baseUrl) => {
  if (!conteudo) return <p>Sem conteúdo disponível.</p>;

  if (typeof conteudo === 'string') {
    if (conteudo.includes('<') && conteudo.includes('>')) {
      return <div dangerouslySetInnerHTML={{ __html: conteudo }} />;
    }
    return <p>{conteudo}</p>;
  }

  if (Array.isArray(conteudo)) {
    return (
      <div>
        {conteudo.map((block, index) => {
          if (!block) return null;
          
          if (block.type === 'paragraph') {
            return (
              <p key={index}>
                {block.children?.map((child, childIndex) => {
                  if (child.type === 'text') {
                    if (child.bold) return <strong key={childIndex}>{child.text}</strong>;
                    if (child.italic) return <em key={childIndex}>{child.text}</em>;
                    if (child.underline) return <u key={childIndex}>{child.text}</u>;
                    return child.text;
                  }
                  return null;
                })}
              </p>
            );
          }
          
          if (block.type === 'heading') {
            const Tag = `h${block.level || 2}`;
            return (
              <Tag key={index}>
                {block.children?.map((child, childIndex) => {
                  if (child.type === 'text') {
                    if (child.bold) return <strong key={childIndex}>{child.text}</strong>;
                    if (child.italic) return <em key={childIndex}>{child.text}</em>;
                    return child.text;
                  }
                  return null;
                })}
              </Tag>
            );
          }
          
          if (block.type === 'list') {
            const Tag = block.format === 'ordered' ? 'ol' : 'ul';
            return (
              <Tag key={index}>
                {block.children?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.children?.map((child, childIndex) => {
                      if (child.type === 'text') {
                        if (child.bold) return <strong key={childIndex}>{child.text}</strong>;
                        if (child.italic) return <em key={childIndex}>{child.text}</em>;
                        return child.text;
                      }
                      return null;
                    })}
                  </li>
                ))}
              </Tag>
            );
          }
          
          if (block.type === 'image') {
            const imageUrl = block.image?.url || block.url;
            if (imageUrl) {
              return (
                <figure key={index} className="imagem-conteudo">
                  <img 
                    src={`${baseUrl}${imageUrl}`} 
                    alt={block.caption || "Imagem da notícia"}
                  />
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
              );
            }
          }
          
          return null;
        })}
      </div>
    );
  }

  return <p>Conteúdo em formato não suportado.</p>;
};

export default NoticiaDetailPage;