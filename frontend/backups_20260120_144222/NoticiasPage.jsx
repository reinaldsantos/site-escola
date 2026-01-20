import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NoticiasPage.css";

// Função para resolver URLs do Strapi (funciona local e vercel)
function getStrapiUrl(endpoint) {
  const isVercel = window.location.hostname.includes('vercel.app');
  const baseUrl = isVercel ? '/strapi-api' : 'https://strapi-final-funcional.onrender.com/api';
  const url = `${baseUrl}/${endpoint}`;
  console.log(`🌐 URL: ${url} (Vercel: ${isVercel})`);
  return url;
}

const NoticiasPage = () => {
  const [abaAtiva, setAbaAtiva] = useState('noticias');
  const [dados, setDados] = useState({ 
    noticias: [], 
    eventos: [], 
    avisos: [] 
  });
  const [carregando, setCarregando] = useState({ 
    noticias: true, 
    eventos: true, 
    avisos: true 
  });

  const buscarNoticias = async () => {
    try {
      const response = await fetch(
        getStrapiUrl("noticias?populate=*&sort=data_publicacao:desc"),
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      const data = await response.json();
      setDados(prev => ({ ...prev, noticias: data.data || [] }));
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    } finally {
      setCarregando(prev => ({ ...prev, noticias: false }));
    }
  };

  const buscarEventos = async () => {
    try {
      const response = await fetch(
        getStrapiUrl("eventos?populate=*"),
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setDados(prev => ({ ...prev, eventos: data.data || [] }));
      }
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    } finally {
      setCarregando(prev => ({ ...prev, eventos: false }));
    }
  };

  const buscarAvisos = async () => {
    try {
      const response = await fetch(
        getStrapiUrl("avisos?populate=*"),
        {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setDados(prev => ({ ...prev, avisos: data.data || [] }));
      } else {
        setDados(prev => ({ ...prev, avisos: [] }));
      }
    } catch (error) {
      console.error("Erro ao buscar avisos:", error);
    } finally {
      setCarregando(prev => ({ ...prev, avisos: false }));
    }
  };

  useEffect(() => {
    buscarNoticias();
    buscarEventos();
    buscarAvisos();
  }, []);

  // FUNÇÃO PARA EXTRAIR TEXTO DO CONTEÚDO
  const extrairTextoConteudo = (conteudo) => {
    if (!conteudo) return "Sem conteúdo";
    
    if (Array.isArray(conteudo)) {
      return conteudo.map(block => {
        if (block.children) {
          return block.children.map(child => child.text).join(' ');
        }
        return '';
      }).join(' ').substring(0, 120) + '...';
    }
    
    return conteudo.substring(0, 120) + '...';
  };

  // FUNÇÃO PARA OBTER URL DA IMAGEM
  const getImagemUrl = (item) => {
    if (!item) return null;
    
    const image = item.attributes?.image || item.image;
    
    if (!image) {
      const possibleImageFields = ['imagem', 'capa', 'foto', 'thumbnail', 'banner'];
      for (const field of possibleImageFields) {
        const fieldData = item.attributes?.[field] || item[field];
        if (fieldData) {
          const img = fieldData;
          if (img.data?.attributes?.url) return getStrapiUrl(img.data.attributes.url.replace('/api/', ''));
          if (img.url) return getStrapiUrl(img.url.replace('/api/', ''));
        }
      }
      return null;
    }
    
    if (image.data?.attributes?.url) {
      return getStrapiUrl(image.data.attributes.url.replace('/api/', ''));
    }
    
    if (image.url) {
      return getStrapiUrl(image.url.replace('/api/', ''));
    }
    
    if (image.data?.url) {
      return getStrapiUrl(image.data.url.replace('/api/', ''));
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
    return item.attributes?.titulo || item.titulo || item.attributes?.title || item.title || "Sem título";
  };

  // FUNÇÃO PARA OBTER CONTEÚDO
  const getConteudo = (item) => {
    return item.attributes?.conteudo || item.conteudo || item.attributes?.content || item.content || "";
  };

  // FUNÇÃO PARA OBTER DATA
  const getData = (item) => {
    return item.attributes?.data_publicacao || item.data_publicacao || 
           item.attributes?.data_evento || item.data_evento || 
           item.attributes?.createdAt || item.createdAt;
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
          <button className="btn-atualizar" onClick={() => {
            buscarNoticias();
            buscarEventos();
            buscarAvisos();
          }}>Atualizar</button>
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
          </div>
        ) : (
          <div className="noticias-grid">
            {dados[abaAtiva].map((item) => {
              const imagemUrl = getImagemUrl(item);
              const titulo = getTitulo(item);
              const conteudo = getConteudo(item);
              const data = getData(item);
              
              return (
                <div key={item.id} className="noticia-card">
                  {imagemUrl && (
                    <div className="noticia-imagem-container">
                      <img 
                        src={imagemUrl} 
                        alt={titulo} 
                        className="noticia-imagem"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('sem-imagem');
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="noticia-info">
                    <div className="noticia-meta">
                      <span className="noticia-data">
                        {formatarData(data)}
                      </span>
                      <span className="noticia-tipo">{abaAtiva.toUpperCase()}</span>
                    </div>
                    
                    <h3 className="noticia-titulo">
                      {titulo}
                    </h3>
                    
                    <p className="noticia-descricao">
                      {extrairTextoConteudo(conteudo)}
                    </p>
                    
                    <div className="noticia-rodape">
                      <span className="noticia-status">
                        <span className="status-badge">{abaAtiva === 'eventos' ? 'Agendado' : 'Publicado'}</span>
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
        </div>
      </footer>
    </div>
  );
};

export default NoticiasPage;
