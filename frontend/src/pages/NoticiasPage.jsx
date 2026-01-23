import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NoticiasPage.css";

import useStrapiUniversal from "../hooks/useStrapiUniversal";

const NoticiasPage = () => {
  const [abaAtiva, setAbaAtiva] = useState('noticias');
  
  const { dados: noticias, carregando: noticiasCarregando } = useStrapiUniversal('noticias', 50);
  const { dados: eventos, carregando: eventosCarregando } = useStrapiUniversal('eventos', 50);
  const { dados: avisos, carregando: avisosCarregando } = useStrapiUniversal('avisos', 50);
  
  const STRAPI_BASE_URL = "https://strapi-definitivo.onrender.com";
  
  const carregando = {
    noticias: noticiasCarregando,
    eventos: eventosCarregando,
    avisos: avisosCarregando
  };
  
  const dados = {
    noticias: noticias || [],
    eventos: eventos || [],
    avisos: avisos || []
  };

  // 🔧 FUNÇÕES AUXILIARES
  const getTitulo = (item) => {
    // Eventos usam "nome", notícias/avisos usam "titulo"
    return item?.titulo || item?.nome || item?.title || "Sem título";
  };

  const getConteudo = (item) => {
    return item?.conteudo || item?.descricao || item?.content || "";
  };

  const getData = (item) => {
    // Eventos: data_hora, Notícias: data, Avisos: createdAt
    return item?.data_hora || item?.data || item?.createdAt;
  };

  // 🎯 FUNÇÃO CORRIGIDA PARA IMAGENS DE EVENTOS
  const getImagemUrl = (item, tipo = abaAtiva) => {
    if (!item) return null;
    
    console.log(`🔍 Buscando imagem para ${tipo}:`, getTitulo(item));
    
    // 1. Usar imagemUrl do hook se existir
    if (item.imagemUrl) {
      console.log('✅ imagemUrl do hook:', item.imagemUrl);
      return item.imagemUrl;
    }
    
    // 2. Verificar campos específicos por tipo
    if (tipo === 'eventos') {
      // Eventos usam "banner"
      if (item.banner?.url) {
        const url = item.banner.url.startsWith('/')
          ? `${STRAPI_BASE_URL}${item.banner.url}`
          : item.banner.url;
        console.log('✅ banner.url encontrado:', url);
        return url;
      }
      
      // Ou pode ter "imagem" também
      if (item.imagem?.url) {
        const url = item.imagem.url.startsWith('/')
          ? `${STRAPI_BASE_URL}${item.imagem.url}`
          : item.imagem.url;
        console.log('✅ imagem.url encontrado (evento):', url);
        return url;
      }
    } 
    else {
      // Notícias e Avisos usam "imagem"
      if (item.imagem?.url) {
        const url = item.imagem.url.startsWith('/')
          ? `${STRAPI_BASE_URL}${item.imagem.url}`
          : item.imagem.url;
        console.log('✅ imagem.url encontrado:', url);
        return url;
      }
    }
    
    console.log('⚠️ Sem imagem');
    return null;
  };

  const extrairTextoConteudo = (conteudo) => {
    if (!conteudo) return "Sem descrição";
    if (typeof conteudo === 'string') {
      return conteudo.substring(0, 100) + (conteudo.length > 100 ? '...' : '');
    }
    return "Descrição disponível";
  };

  const formatarData = (dataString) => {
    if (!dataString) return "";
    try {
      const data = new Date(dataString);
      if (abaAtiva === 'eventos') {
        // Formato especial para eventos: data + hora
        return data.toLocaleString("pt-PT", {
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit"
        });
      }
      return data.toLocaleDateString("pt-PT", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  // 🎨 COMPONENTE DE IMAGEM
  const ImagemCard = ({ item, tipo }) => {
    const imagemUrl = getImagemUrl(item, tipo);
    
    if (imagemUrl) {
      return (
        <div className="noticia-imagem-container">
          <img 
            src={imagemUrl}
            alt={getTitulo(item)}
            className="noticia-imagem"
            loading="lazy"
            onLoad={() => console.log(`✅ Imagem carregada: ${getTitulo(item)}`)}
            onError={(e) => {
              console.error(`❌ Erro na imagem: ${imagemUrl}`);
              e.target.style.display = 'none';
              // Mostrar fallback
              const fallback = document.createElement('div');
              fallback.className = 'imagem-fallback';
              fallback.innerHTML = `
                <div class="fallback-icon">${tipo === 'eventos' ? '📅' : tipo === 'avisos' ? '⚠️' : '📰'}</div>
                <div class="fallback-text">${tipo.toUpperCase()}</div>
              `;
              e.target.parentElement.appendChild(fallback);
            }}
          />
        </div>
      );
    }
    
    // Placeholder se não tiver imagem
    return (
      <div className={`imagem-placeholder ${tipo}`}>
        <div className="placeholder-icon">
          {tipo === 'eventos' ? '📅' : tipo === 'avisos' ? '⚠️' : '📰'}
        </div>
        <div className="placeholder-text">
          {tipo.toUpperCase()}
          {tipo === 'eventos' && item.local && (
            <div className="local-info">📍 {item.local}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="noticias-page">
      <header className="noticias-cabecalho">
        <h1>Notícias EPF</h1>
        <p className="subtitulo">Fique por dentro das últimas novidades da nossa escola</p>
        <div className="cabecalho-info">
          <div className="contador-noticias">
            <span className="numero">{dados.noticias.length + dados.eventos.length + dados.avisos.length}</span>
            <span className="label">publicações</span>
          </div>
        </div>
      </header>

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
            <p>Nenhum {abaAtiva} publicado ainda.</p>
          </div>
        ) : (
          <div className="noticias-grid">
            {dados[abaAtiva].map((item) => {
              const titulo = getTitulo(item);
              const conteudo = getConteudo(item);
              const data = getData(item);
              
              return (
                <div key={item.id} className="noticia-card">
                  <ImagemCard item={item} tipo={abaAtiva} />
                  
                  <div className="noticia-info">
                    <div className="noticia-meta">
                      <span className="noticia-data">
                        {formatarData(data)}
                        {abaAtiva === 'eventos' && item.vagas && (
                          <span className="vagas-info"> • 🎫 {item.vagas} vagas</span>
                        )}
                      </span>
                      <span className="noticia-tipo">{abaAtiva.toUpperCase()}</span>
                    </div>
                    
                    <h3 className="noticia-titulo">{titulo}</h3>
                    
                    <p className="noticia-descricao">
                      {extrairTextoConteudo(conteudo)}
                    </p>
                    
                    <div className="noticia-rodape">
                      <span className="status-badge">
                        {abaAtiva === 'eventos' ? '🎫 Evento' : 
                         abaAtiva === 'avisos' ? '⚠️ Aviso' : '📰 Notícia'}
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
    </div>
  );
};

export default NoticiasPage;