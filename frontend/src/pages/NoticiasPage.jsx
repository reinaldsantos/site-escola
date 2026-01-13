// ================================================
// PÁGINA: NoticiasPage.jsx
// Mostra TODAS as notícias do Strapi
// ================================================

import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';
import { strapiService } from '../services/strapiService';
import './NoticiasPage.css';

const NoticiasPage = () => {
    const { dados: noticias, carregando } = useStrapiData('noticias', 50);
    
    return (
        <div className="pagina-noticias">
            <div className="container">
                <header className="cabecalho-noticias">
                    <h1>📰 Notícias da Escola</h1>
                    <p className="subtitulo">
                        Fique por dentro das últimas novidades e acontecimentos
                    </p>
                </header>
                
                {carregando ? (
                    <div className="carregando-noticias">
                        <div className="spinner"></div>
                        <p>Carregando notícias...</p>
                    </div>
                ) : noticias.length === 0 ? (
                    <div className="sem-noticias">
                        <div className="icone-sem-noticias">📭</div>
                        <h3>Nenhuma notícia publicada</h3>
                        <p>
                            As notícias aparecerão aqui automaticamente quando forem 
                            publicadas no <a href="http://localhost:1337/admin">Strapi Admin</a>
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="total-noticias">
                            <span className="badge-total">{noticias.length} notícias</span>
                        </div>
                        
                        <div className="grid-noticias">
                            {noticias.map(noticia => {
                                const imagemUrl = strapiService.getImagemUrl(noticia.image);
                                const resumo = strapiService.extrairTexto(noticia.conteudo, 200);
                                
                                return (
                                    <article key={noticia.id} className="card-noticia">
                                        <div className="card-noticia-cabecalho">
                                            {imagemUrl && (
                                                <img 
                                                    src={imagemUrl} 
                                                    alt={noticia.titulo}
                                                    className="card-noticia-imagem"
                                                />
                                            )}
                                            <div className="card-noticia-data">
                                                {new Date(noticia.createdAt).toLocaleDateString('pt-PT', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                        <div className="card-noticia-corpo">
                                            <h2 className="card-noticia-titulo">
                                                {noticia.titulo}
                                            </h2>
                                            <p className="card-noticia-resumo">
                                                {resumo}
                                            </p>
                                            <div className="card-noticia-rodape">
                                                <Link 
                                                    to={`/noticias/${noticia.id}`} 
                                                    className="btn-ler-noticia"
                                                >
                                                    Ler notícia completa
                                                </Link>
                                                {noticia.publicado && (
                                                    <span className="badge-publicado">
                                                        ✅ Publicado
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </>
                )}
                
                <div className="voltar-home">
                    <Link to="/" className="link-voltar">
                        ← Voltar para a página inicial
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoticiasPage;
