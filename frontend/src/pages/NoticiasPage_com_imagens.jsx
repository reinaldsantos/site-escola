import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NoticiasPage.css";

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
      const response = await fetch("http://site-escola-65zi.onrender.com/api/noticias?populate=*&sort=data_publicacao:desc");
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
      const response = await fetch("http://site-escola-65zi.onrender.com/api/eventos?populate=*");
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
      const response = await fetch("http://site-escola-65zi.onrender.com/api/avisos?populate=*");
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
      }).join(' ').substring(0, 150) + '...';
    }
    
    return conteudo.substring(0, 150) + '...';
  };

  // FUNÇÃO PARA OBTER URL DA IMAGEM
  const getImagemUrl = (item) => {
    if (!item.attributes?.image) return null;
    
    const image = item.attributes.image;
    
    // Diferentes estruturas do Strapi v4
    if (image?.data?.attributes?.url) {
      return http://site-escola-65zi.onrender.com + image.data.attributes.url;
    }
    
    if (image?.url) {
      return http://site-escola-65zi.onrender.com + image.url;
    }
    
    if (image?.data?.url) {
      return http://site-escola-65zi.onrender.com + image.data.url;
    }
    
    // Outras chaves possíveis
    if (item.attributes?.imagem?.data?.attributes?.url) {
      return http://site-escola-65zi.onrender.com + item.attributes.imagem.data.attributes.url;
    }
    
    if (item.attributes?.capa?.data?.attributes?.url) {
      return http://site-escola-65zi.onrender.com + item.attributes.capa.data.attributes.url;
    }
    
    return null;
  };

  return (
    <div className="noticias-page">
      <header className="noticias-cabecalho">
        <h1>Notícias EPF</h1>
        <p className="subtitulo">Fique por dentro das últimas novidades da nossa escola</p>
        <div className="cabecalho-info">
          <div className="contador-noticias">
            <span className="numero">{dados.noticias.length}</span>
            <span className="label">notícias</span>
          </div>
          <button className="btn-atualizar" onClick={buscarNoticias}>Atualizar</button>
        </div>
      </header>

      <div className="mensagem-boas-vindas">
        <p className="mensagem-destaque">Evoluímos juntos.</p>
        <p className="mensagem-sub">Evoluímos juntos.</p>
      </div>

      <nav className="noticias-navegacao">
        <div className="abas-container">
          <button className={\ba \\} onClick={() => setAbaAtiva("noticias")}>Notícias</button>
          <button className={\ba \\} onClick={() => setAbaAtiva("eventos")}>Eventos</button>
          <button className={\ba \\} onClick={() => setAbaAtiva("avisos")}>Avisos</button>
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
          <div className="noticias-lista">
            {dados[abaAtiva].map((item) => {
              const imagemUrl = getImagemUrl(item);
              
              return (
                <div key={item.id} className="noticia-item">
                  {imagemUrl && (
                    <div className="noticia-imagem-container">
                      <img 
                        src={imagemUrl} 
                        alt={item.attributes?.titulo || "Notícia"} 
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
                        {item.attributes?.data_publicacao
                          ? new Date(item.attributes.data_publicacao).toLocaleDateString("pt-PT", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          : new Date(item.attributes?.createdAt).toLocaleDateString("pt-PT", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                      </span>
                      <span className="noticia-tipo">{abaAtiva.toUpperCase()}</span>
                    </div>
                    <h3 className="noticia-titulo">{item.attributes?.titulo || "Sem título"}</h3>
                    <p className="noticia-descricao">
                      {extrairTextoConteudo(item.attributes?.conteudo)}
                    </p>
                    <div className="noticia-rodape">
                      <span className="noticia-status">
                        <span className="status-badge">Publicada</span>
                        <span className="noticia-autor">EPF Escola</span>
                      </span>
                      <Link to={\/\/\\} className="noticia-link">Ver completo ?</Link>
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
          <p>© 2026 EPF - Escola Profissional. Todas as notícias são atualizadas regularmente.</p>
        </div>
      </footer>
    </div>
  );
};

export default NoticiasPage;

