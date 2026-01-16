// src/pages/NoticiaDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./NoticiaDetailPage.css";

const NoticiaDetailPage = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarNoticia = async () => {
      try {
        setCarregando(true);
        // URL para buscar uma notícia específica
        const response = await fetch(`http://site-escola-65zi.onrender.com/api/noticias/${id}?populate=*`);
        
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
          ? Voltar para Notícias
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
          ? Voltar para Notícias
        </Link>
      </div>
    );
  }

  const { attributes } = noticia;
  const titulo = attributes?.titulo || "Sem título";
  const conteudo = attributes?.conteudo || "";
  const data = attributes?.data_publicacao || attributes?.createdAt;
  const imagem = attributes?.imagem;

  // Extrair URL da imagem
  let imagemUrl = null;
  if (imagem?.data?.attributes?.url) {
    imagemUrl = `http://site-escola-65zi.onrender.com${imagem.data.attributes.url}`;
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

  return (
    <div className="noticia-detail-container">
      <article className="noticia-detail">
        <Link to="/noticias" className="btn-voltar">
          ? Voltar para Notícias
        </Link>
        
        {imagemUrl && (
          <div className="noticia-imagem-principal">
            <img src={imagemUrl} alt={titulo} />
          </div>
        )}

        <header className="noticia-header">
          {dataFormatada && (
            <time className="noticia-data" dateTime={data}>
              ?? Publicado em {dataFormatada}
            </time>
          )}
          
          <h1 className="noticia-titulo">{titulo}</h1>
          
          <div className="noticia-meta">
            <span className="badge-tipo">?? Notícia</span>
            {attributes?.autor && (
              <span className="noticia-autor">?? Por {attributes.autor}</span>
            )}
          </div>
        </header>

        <div className="noticia-conteudo">
          {renderConteudo(conteudo)}
        </div>

        <footer className="noticia-footer">
          <div className="acoes">
            <Link to="/noticias" className="btn-acao">
              ? Ver todas as notícias
            </Link>
            <button className="btn-acao compartilhar">
              ?? Compartilhar
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

// Função para renderizar conteúdo (suporta rich text do Strapi)
const renderConteudo = (conteudo) => {
  if (!conteudo) return <p>Sem conteúdo disponível.</p>;

  // Se for string simples
  if (typeof conteudo === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: conteudo.replace(/\n/g, '<br/>') }} />;
  }

  // Se for array (rich text do Strapi)
  if (Array.isArray(conteudo)) {
    return (
      <div>
        {conteudo.map((block, index) => {
          if (block.type === 'paragraph') {
            return <p key={index}>{block.children?.map(child => child.text).join(' ')}</p>;
          }
          if (block.type === 'heading') {
            const Tag = `h${block.level}`;
            return <Tag key={index}>{block.children?.map(child => child.text).join(' ')}</Tag>;
          }
          if (block.type === 'list') {
            const Tag = block.format === 'ordered' ? 'ol' : 'ul';
            return (
              <Tag key={index}>
                {block.children?.map((item, i) => (
                  <li key={i}>{item.children?.map(child => child.text).join(' ')}</li>
                ))}
              </Tag>
            );
          }
          return null;
        })}
      </div>
    );
  }

  return <p>Conteúdo em formato não suportado.</p>;
};

export default NoticiaDetailPage;



