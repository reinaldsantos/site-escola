import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NoticiasPage.css";

// CORREÇÃO: Importar o hook atualizado
import useStrapiUniversal from "../hooks/useStrapiUniversal";

const NoticiasPage = () => {
  const [abaAtiva, setAbaAtiva] = useState('noticias');
  
  // CORREÇÃO: Usar o hook atualizado em vez de fetch direto
  const { dados: noticias, carregando: noticiasCarregando } = useStrapiUniversal('noticias', 50);
  const { dados: eventos, carregando: eventosCarregando } = useStrapiUniversal('eventos', 50);
  const { dados: avisos, carregando: avisosCarregando } = useStrapiUniversal('avisos', 50);
  
  // CORREÇÃO: Base URL centralizada
  const STRAPI_BASE_URL = "https://strapi-definitivo.onrender.com";
  
  // Mapear estados de carregamento
  const carregando = {
    noticias: noticiasCarregando,
    eventos: eventosCarregando,
    avisos: avisosCarregando
  };
  
  // Mapear dados
  const dados = {
    noticias: noticias || [],
    eventos: eventos || [],
    avisos: avisos || []
  };

  // FUNÇÃO PARA EXTRAIR TEXTO DO CONTEÚDO
  const extrairTextoConteudo = (conteudo) => {
    if (!conteudo) return "Sem conteúdo";
    
    if (Array.isArray(conteudo)) {
      return conteudo.map(block => {
        if (block.children) {
          return block.children.map(child => child.text).join(' ');
        }
        return '';
      }).join(' ').substring(0, 150) + '...';
    }
    
    return typeof conteudo === 'string' ? conteudo.substring(0, 150) + '...' : "Sem conteúdo";
  };

  // FUNÇÃO PARA OBTER URL DA IMAGEM (compatível com hook)
  const getImagemUrl = (item) => {
    if (!item) return null;
    
    // Tenta usar imagemUrl do hook primeiro
    if (item.imagemUrl) {
      return item.imagemUrl;
    }
    
    // Fallback: procura em campos comuns
    const camposImagem = ['imagem', 'image', 'foto', 'capa', 'thumbnail'];
    
    for (const campo of camposImagem) {
      const imagemData = item[campo];
      
      if (imagemData) {
        if (imagemData.data?.attributes?.url) {
          return `${STRAPI_BASE_URL}${imagemData.data.attributes.url}`;
        }
        if (imagemData.url) {
          return `${STRAPI_BASE_URL}${imagemData.url}`;
        }
      }
    }
    
    return null;
  };

  // FUNÇÃO PARA FORMATAR DATA
  const formatarData = (dataString) => {
    if (!dataString) return "Data não disponível";
    
    try {
      const data = new Date(dataString);
      return data.toLocaleDateString("pt-PT", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch (error) {
      return "Data inválida";
    }
  };

  // FUNÇÃO PARA OBTER TÍTULO
  const getTitulo = (item) => {
    return item?.titulo || item?.title || "Sem título";
  };

  // FUNÇÃO PARA OBTER CONTEÚDO
  const getConteudo = (item) => {
    return item?.conteudo || item?.content || item?.descricao || "";
  };

  // FUNÇÃO PARA OBTER DATA
  const getData = (item) => {
    return item?.data_publicacao || item?.data_evento || item?.createdAt;
  };

  return (
    <div className="noticias-page">
      <header className="noticias-cabecalho">
        <h1>Notícias EPF</h1>
        <p className="subtitulo">Fique por dentro das últimas novidades da nossa escola</p>
        <div className="cabecalho-info">
          <div className="contador-noticias">
            <span className="numero">{dados.noticias.length + dados.eventos.length}</span>
            <span className="label">publicações</span>
          </div>
          <button className="btn-atualizar" onClick={() => window.location.reload()}>
            Atualizar
          </button>
        </div>
      </header>

      <div className="mensagem-boas-vindas">
        <p className="mensagem-destaque">Evoluímos juntos.</p>
        <p className="mensagem-sub">Evoluímos juntos.</p>
      </div>

      <nav className="noticias-navegacao">
        <div className="abas-container">
          <button className={`aba ${abaAtiva === "noticias" ? "ativa" : ""}`} onClick={() => setAbaAtiva("noticias")}>
            Notícias ({dados.noticias.length})
          </button>
          <button className={`aba ${abaAtiva === "eventos" ? "ativa" : ""}`} onClick={() => setAbaAtiva("eventos")}>
            Eventos ({dados.eventos.length})
          </button>
          <button className={`aba ${abaAtiva === "avisos" ? "ativa" : ""}`} onClick={() => setAbaAtiva("avisos")}>
            Avisos ({dados.avisos.length})
          </button>
        </div>
      </nav>

      <main className="noticias-conteudo">
        {carregando[abaAtiva] ? (
          <div className="carregando-container">
            <div className="spinner"></div>
            <p>Carregando {abaAtiva}...</p>
          </div>
        ) : dados[abaAtiva].length === 0 ? (
          <div className="sem-conteudo">
            <p>Nenhum conteúdo publicado ainda na coleção <strong>{abaAtiva}</strong>.</p>
            <p>Publique no <strong>Strapi Admin</strong></p>
            <p className="admin-link">
              <a href={`${STRAPI_BASE_URL}/admin`} target="_blank" rel="noopener noreferrer">
                Acessar Painel Administrativo
              </a>
            </p>
          </div>
        ) : (
          <div className="noticias-lista">
            {dados[abaAtiva].map((item) => {
              const imagemUrl = getImagemUrl(item);
              const titulo = getTitulo(item);
              const conteudo = getConteudo(item);
              const data = getData(item);
              
              return (
                <div key={item.id} className="noticia-item">
                  {imagemUrl && (
                    <div className="noticia-imagem-container">
                      <img 
                        src={imagemUrl} 
                        alt={titulo} 
                        className="noticia-imagem"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          console.log('Erro ao carregar imagem:', imagemUrl);
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="noticia-conteudo">
                    <div className="noticia-meta">
                      <span className="noticia-data">
                        {formatarData(data)}
                      </span>
                      <span className="noticia-tipo">{abaAtiva.toUpperCase()}</span>
                    </div>
                    <h3 className="noticia-titulo">{titulo}</h3>
                    <p className="noticia-descricao">
                      {extrairTextoConteudo(conteudo)}
                    </p>
                    <div className="noticia-rodape">
                      <span className="noticia-status">
                        <span className="status-badge">Publicada</span>
                        <span className="noticia-autor">EPF Escola</span>
                      </span>
                      <Link to={`/${abaAtiva}/${item.id}`} className="noticia-link">
                        Ver {abaAtiva === 'eventos' ? 'detalhes' : 'completo'} →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <footer className="noticias-rodape">
        <div className="informacoes-importantes">
          <h3>INFORMAÇÕES IMPORTANTES</h3>
          <p>Todas as informações são atualizadas automaticamente através do nosso sistema. Para mais informações, contacte a secretaria da escola.</p>
          <Link to="/contactos" className="btn-contactar">CONTACTAR SECRETARIA</Link>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} EPF - Escola Profissional. Todas as notícias são atualizadas regularmente.</p>
          <p className="admin-note">
            Sistema alimentado por: <a href={`${STRAPI_BASE_URL}/admin`} target="_blank" rel="noopener noreferrer">Strapi Admin</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NoticiasPage;