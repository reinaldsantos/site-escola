// ================================================
// PÁGINA: EventosPage.jsx
// Mostra TODOS os eventos do Strapi
// ================================================

import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';
import { strapiService } from '../services/strapiService';
import './EventosPage.css';

const EventosPage = () => {
    const { dados: eventos, carregando } = useStrapiData('eventos', 50);
    
    // Separa eventos passados e futuros
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    const eventosFuturos = eventos.filter(evento => 
        !evento.data || new Date(evento.data) >= hoje
    ).sort((a, b) => new Date(a.data || 0) - new Date(b.data || 0));
    
    const eventosPassados = eventos.filter(evento => 
        evento.data && new Date(evento.data) < hoje
    ).sort((a, b) => new Date(b.data) - new Date(a.data));
    
    return (
        <div className="pagina-eventos">
            <div className="container">
                <header className="cabecalho-eventos">
                    <h1>?? Eventos da Escola</h1>
                    <p className="subtitulo">
                        Calendário de atividades, workshops e encontros
                    </p>
                </header>
                
                {carregando ? (
                    <div className="carregando-eventos">
                        <div className="spinner"></div>
                        <p>Carregando eventos...</p>
                    </div>
                ) : eventos.length === 0 ? (
                    <div className="sem-eventos">
                        <div className="icone-sem-eventos">??</div>
                        <h3>Nenhum evento agendado</h3>
                        <p>
                            Os eventos aparecerão aqui automaticamente quando forem 
                            publicados no <a href="http://site-escola-65zi.onrender.com/admin">Strapi Admin</a>
                        </p>
                    </div>
                ) : (
                    <>
                        {eventosFuturos.length > 0 && (
                            <section className="secao-eventos">
                                <h2 className="secao-titulo">
                                    ?? Próximos Eventos
                                    <span className="badge-secao">{eventosFuturos.length}</span>
                                </h2>
                                <div className="grid-eventos">
                                    {eventosFuturos.map(evento => (
                                        <EventoCard key={evento.id} evento={evento} tipo="futuro" />
                                    ))}
                                </div>
                            </section>
                        )}
                        
                        {eventosPassados.length > 0 && (
                            <section className="secao-eventos">
                                <h2 className="secao-titulo">
                                    ?? Eventos Anteriores
                                    <span className="badge-secao">{eventosPassados.length}</span>
                                </h2>
                                <div className="grid-eventos">
                                    {eventosPassados.map(evento => (
                                        <EventoCard key={evento.id} evento={evento} tipo="passado" />
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}
                
                <div className="voltar-home">
                    <Link to="/" className="link-voltar">
                        ? Voltar para a página inicial
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Componente para card de evento
const EventoCard = ({ evento, tipo }) => {
    const imagemUrl = strapiService.getImagemUrl(evento.imagem);
    const dataFormatada = evento.data 
        ? new Date(evento.data).toLocaleDateString('pt-PT', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        : 'Data a definir';
    
    return (
        <article className={`evento-card evento-${tipo}`}>
            {imagemUrl && (
                <div className="evento-imagem-container">
                    <img src={imagemUrl} alt={evento.titulo} className="evento-imagem" />
                </div>
            )}
            <div className="evento-conteudo">
                <div className="evento-cabecalho">
                    <span className="evento-data">{dataFormatada}</span>
                    {tipo === 'passado' && (
                        <span className="badge-passado">Realizado</span>
                    )}
                </div>
                <h3 className="evento-titulo">{evento.titulo || 'Evento'}</h3>
                {evento.descricao && (
                    <p className="evento-descricao">
                        {typeof evento.descricao === 'string' 
                            ? evento.descricao
                            : strapiService.extrairTexto(evento.descricao, 150)}
                    </p>
                )}
                <div className="evento-detalhes">
                    {evento.local && (
                        <span className="evento-local">
                            ?? {evento.local}
                        </span>
                    )}
                    {evento.horario && (
                        <span className="evento-horario">
                            ? {evento.horario}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
};

export default EventosPage;


