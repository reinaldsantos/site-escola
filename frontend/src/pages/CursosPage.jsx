﻿// src/pages/CursosPage.jsx - VERSÃO PROFISSIONAL UNIFICADA
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CursosPage.css";

// Dados dos cursos (mantenha seus dados reais aqui)
const cursosData = [
  {
    id: 1,
    name: 'Técnico de Comércio',
    type: 'Profissional',
    duration: '3 anos',
    description: 'Formação em vendas, atendimento ao cliente e gestão comercial com foco no mercado atual.',
    vacancies: 25,
    image: '/images/cursos/comercio.jpg', // Sua imagem real
    slug: 'tecnico-de-comercio',
    area: 'Gestão e Comércio'
  },
  {
    id: 2,
    name: 'Técnico de Cozinha/Pastelaria',
    type: 'Profissional',
    duration: '3 anos',
    description: 'Gastronomia regional portuguesa e internacional com técnicas modernas.',
    vacancies: 15,
    image: '/images/cursos/cozinha.jpg',
    slug: 'tecnico-de-cozinha-pastelaria',
    area: 'Hotelaria e Turismo'
  },
  {
    id: 3,
    name: 'Técnico de Restaurante/Bar',
    type: 'Profissional',
    duration: '3 anos',
    description: 'Atendimento e serviço de mesa em estabelecimentos de restauração.',
    vacancies: 20,
    image: '/images/cursos/restaurante.jpg',
    slug: 'tecnico-de-restaurante-bar',
    area: 'Hotelaria e Turismo'
  },
  // Adicione todos os seus 11 cursos aqui com imagens reais
];

const CursosPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredCursos = filter === 'all' 
    ? cursosData 
    : cursosData.filter(curso => curso.type === filter);

  const totalCursos = cursosData.length;
  const cursosProfissionais = cursosData.filter(c => c.type === 'Profissional').length;
  const cursosCEF = cursosData.filter(c => c.type === 'CEF').length;

  return (
    <main className="cursos-page">
      {/* HERO SECTION */}
      <section className="cursos-hero">
        <div className="container">
          <h1>Formação Profissional</h1>
          <p className="hero-subtitle">
            Descubra todos os cursos disponíveis na Escola Profissional do Fundão. 
            Formação prática com 92% de empregabilidade garantida.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{totalCursos}</span>
              <span className="stat-label">Cursos Disponíveis</span>
            </div>
            <div className="stat">
              <span className="stat-number">{cursosProfissionais}</span>
              <span className="stat-label">Cursos Profissionais</span>
            </div>
            <div className="stat">
              <span className="stat-number">{cursosCEF}</span>
              <span className="stat-label">Cursos CEF</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="cursos-filter-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos os Cursos ({totalCursos})
            </button>
            <button 
              className={`filter-tab ${filter === 'Profissional' ? 'active' : ''}`}
              onClick={() => setFilter('Profissional')}
            >
              Cursos Profissionais ({cursosProfissionais})
            </button>
            <button 
              className={`filter-tab ${filter === 'CEF' ? 'active' : ''}`}
              onClick={() => setFilter('CEF')}
            >
              Cursos CEF ({cursosCEF})
            </button>
          </div>
        </div>
      </section>

      {/* LISTA DE CURSOS */}
      <section className="cursos-container">
        <div className="container">
          <div className="cursos-header">
            <h2>
              {filter === 'all' ? 'Todos os Cursos' : 
               filter === 'Profissional' ? 'Cursos Profissionais' : 'Cursos CEF'}
              <span className="courses-count"> ({filteredCursos.length})</span>
            </h2>
            <p className="courses-intro">
              Formação prática com estágio em empresas parceiras e certificação reconhecida pelo mercado de trabalho.
            </p>
          </div>

          {filteredCursos.length === 0 ? (
            <div className="no-courses">
              <p>Nenhum curso encontrado com este filtro.</p>
              <button 
                className="btn btn-outline"
                onClick={() => setFilter('all')}
              >
                Ver todos os cursos
              </button>
            </div>
          ) : (
            <div className="cursos-grid">
              {filteredCursos.map(curso => (
                <div key={curso.id} className="course-card">
                  <div className="course-image">
                    <img 
                      src={curso.image || '/images/cursos/default.jpg'} 
                      alt={curso.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="course-content">
                    <div className="course-header">
                      <h3 className="course-title">{curso.name}</h3>
                      <span className={`course-type-badge ${
                        curso.type === 'Profissional' ? 'type-profissional' : 'type-cef'
                      }`}>
                        {curso.type}
                      </span>
                    </div>
                    
                    <p className="course-description">{curso.description}</p>
                    
                    <div className="course-details">
                      <div className="detail-item">
                        <span className="detail-label">Duração:</span>
                        <span className="detail-value">{curso.duration}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Vagas:</span>
                        <span className={`detail-value ${curso.vacancies < 10 ? 'vacancies-low' : ''}`}>
                          {curso.vacancies} lugares
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Área:</span>
                        <span className="detail-value">{curso.area}</span>
                      </div>
                    </div>
                    
                    <div className="course-actions">
                      <Link 
                        to={`/cursos/${curso.slug}`} 
                        className="btn btn-outline"
                      >
                        Mais Informações
                      </Link>
                      <Link 
                        to="/inscricoes" 
                        className="btn btn-primary"
                      >
                        Inscrever-me
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEÇÃO INFORMATIVA */}
      <section className="info-section">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Como Funciona
              </h3>
              <p>
                Todos os cursos são ministrados por profissionais experientes e incluem estágio em 
                empresas parceiras. A formação é 100% prática com equipamentos modernos e 
                laboratórios atualizados.
              </p>
              <div className="info-card-actions">
                <Link to="/escola" className="btn btn-outline">
                  Conhecer a Escola
                </Link>
                <Link to="/contactos" className="btn btn-primary">
                  Contactar Secretaria
                </Link>
              </div>
            </div>
            
            <div className="info-card">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                Processo de Inscrição
              </h3>
              <ol>
                <li>Escolha o curso desejado</li>
                <li>Contacte a secretaria para marcar visita</li>
                <li>Entregue documentação necessária</li>
                <li>Confirmação da matrícula e início das aulas</li>
              </ol>
              <div className="info-card-actions">
                <Link to="/inscricoes" className="btn btn-primary">
                  Pré-inscrição Online
                </Link>
                <a href="/docs/guia-inscricao.pdf" className="btn btn-outline">
                  Guia de Inscrição (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CursosPage;