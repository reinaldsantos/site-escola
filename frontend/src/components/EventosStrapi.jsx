// ================================================
// COMPONENTE: EventosStrapi.jsx
// Mostra eventos do Strapi - Use em QUALQUER página
// ================================================

import React from 'react';
import { Link } from 'react-router-dom';
import useStrapiData from '../hooks/useStrapiData';
import { strapiService } from '../services/strapiService';
import './EventosStrapi.css';

const EventosStrapi = ({ limite = 3, mostrarTitulo = true }) => {
    const { dados: eventos, carregando } = useStrapiData('eventos', limite);
    
    // Filtra apenas eventos futuros ou atuais
    const eventosFuturos = eventos.filter(evento => {
        if (!evento.data) return true;
        const dataEvento = new Date(evento.data);
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        return dataEvento >= hoje;
    });
    
    // Ordena por data mais próxima
    eventosFuturos.sort((a, b) => new Date(a.data) - new Date(b.data));
    
    // Se não quiser mostrar quando não há dados
    if (!carregando && eventosFuturos.length === 0) {
        return null;
    }
    
    return (
        <div className="eventos-strapi">
            {mostrarTitulo && (
                <h2 className="eventos-titulo">📅 PRÓXIMOS EVENTOS</h2>
            )}
            
            {carregando ? (
                <div className="eventos-carregando">
                    <p>Carregando eventos...</p>
                </div>
            ) : (
                <div className="eventos-grid">
                    {eventosFuturos.slice(0, limite).map(evento => {
                        const imagemUrl = strapiService.getImagemUrl(evento.imagem);
                        const dataFormatada = evento.data 
                            ? new Date(evento.data).toLocaleDateString('pt-PT', {
                                weekday: 'short',
                                day: 'numeric',
                                month: 'short'
                            })
                            : 'Data a definir';
                        
                        return (
                            <div key={evento.id} className="evento-card">
                                <div className="evento-data">
                                    {dataFormatada}
                                </div>
                                <div className="evento-conteudo">
                                    <h3 className="evento-titulo">{evento.titulo || 'Evento'}</h3>
                                    
                                    {evento.descricao && (
                                        <p className="evento-descricao">
                                            {typeof evento.descricao === 'string' 
                                                ? evento.descricao.substring(0, 80) + '...'
                                                : strapiService.extrairTexto(evento.descricao, 80)}
                                        </p>
                                    )}
                                    
                                    <div className="evento-detalhes">
                                        {evento.local && (
                                            <span className="evento-local">
                                                📍 {evento.local}
                                            </span>
                                        )}
                                        
                                        {evento.horario && (
                                            <span className="evento-horario">
                                                ⏰ {evento.horario}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <Link 
                                        to={`/eventos/${evento.id}`} 
                                        className="evento-link"
                                    >
                                        Mais informações
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            
            {!carregando && eventosFuturos.length > 0 && (
                <div className="eventos-ver-todos">
                    <Link to="/eventos" className="btn-ver-eventos">
                        📅 Ver todos os eventos
                    </Link>
                </div>
            )}
        </div>
    );
};

export default EventosStrapi;
