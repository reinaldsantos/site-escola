// ================================================
// COMPONENTE: NoticiasStrapi.jsx
// Mostra notícias do Strapi - Pode colocar em QUALQUER página
// NÃO altera seu layout original
// ================================================

import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';
import { strapiService } from '../services/strapiService';
import './NoticiasStrapi.css';

const NoticiasStrapi = ({ limite = 3, mostrarTitulo = true, estilo = 'padrao' }) => {
    const { dados: noticias, carregando } = useStrapiData('noticias', limite);
    
    // Se não quiser mostrar quando não há dados
    if (!carregando && (!noticias || noticias.length === 0)) {
        return null; // Não mostra nada
    }
    
    return (
        <div className={`noticias-strapi noticias-${estilo}`}>
            {mostrarTitulo && (
                <h2 className="noticias-titulo">📰 ÚLTIMAS NOTÍCIAS</h2>
            )}
            
            {carregando ? (
                <div className="noticias-carregando">
                    <p>Carregando notícias...</p>
                </div>
            ) : (
                <div className="noticias-grid">
                    {noticias.map(noticia => {
                        const imagemUrl = strapiService.getImagemUrl(noticia.image);
                        const resumo = strapiService.extrairTexto(noticia.conteudo, 120);
                        
                        return (
                            <article key={noticia.id} className="noticia-card">
                                {imagemUrl && (
                                    <div className="noticia-imagem-container">
                                        <img 
                                            src={imagemUrl} 
                                            alt={noticia.titulo}
                                            className="noticia-imagem"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="noticia-conteudo">
                                    <h3 className="noticia-titulo">{noticia.titulo}</h3>
                                    <p className="noticia-resumo">{resumo}</p>
                                    <div className="noticia-rodape">
                                        <span className="noticia-data">
                                            {new Date(noticia.createdAt).toLocaleDateString('pt-PT')}
                                        </span>
                                        <Link 
                                            to={`/noticias/${noticia.id}`} 
                                            className="noticia-link"
                                        >
                                            Ler mais
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}
            
            {!carregando && noticias.length > 0 && (
                <div className="noticias-ver-todas">
                    <Link to="/noticias" className="btn-ver-todas">
                        📰 Ver todas as notícias
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NoticiasStrapi;

// COMO USAR:
// 1. <NoticiasStrapi /> - Mostra 3 notícias com título
// 2. <NoticiasStrapi limite={5} /> - Mostra 5 notícias
// 3. <NoticiasStrapi mostrarTitulo={false} /> - Sem título
// NÃO ALTERA SEU LAYOUT ORIGINAL!
