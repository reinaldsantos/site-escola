// src/pages/Courses.jsx - VERSÃO COMPLETA COM TODOS OS CURSOS
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const [filter, setFilter] = useState('all');
  
  // Dados de TODOS os cursos (batendo com cursosData.js)
  const courses = [
    {
      id: 1,
      name: 'Técnico de Comércio',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Formação em vendas, atendimento ao cliente e gestão comercial',
      vacancies: 25,
      icon: '💼',
      slug: 'tecnico-de-comercio'
    },
    {
      id: 2,
      name: 'Técnico de Cozinha/Pastelaria',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Gastronomia regional portuguesa e internacional',
      vacancies: 15,
      icon: '👨‍🍳',
      slug: 'tecnico-de-cozinha-pastelaria'
    },
    {
      id: 3,
      name: 'Técnico de Restaurante/Bar',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Atendimento e serviço de mesa em estabelecimentos de restauração',
      vacancies: 20,
      icon: '🍽️',
      slug: 'tecnico-de-restaurante-bar'
    },
    {
      id: 4,
      name: 'Técnico de Gestão do Ambiente',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Gestão ambiental e desenvolvimento sustentável',
      vacancies: 18,
      icon: '🌱',
      slug: 'tecnico-de-gestao-do-ambiente'
    },
    {
      id: 5,
      name: 'Técnico de Desenho da Construção Civil',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Acompanhamento de obras e apoio a gabinetes de arquitetura',
      vacancies: 22,
      icon: '🏗️',
      slug: 'tecnico-de-desenho-da-construcao-civil'
    },
    {
      id: 6,
      name: 'Técnico de Manutenção Industrial - Electromecânica',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Análise, diagnóstico e manutenção de aparelhos industriais',
      vacancies: 20,
      icon: '🔧',
      slug: 'tecnico-de-manutencao-industrial-eletromecanica'
    },
    {
      id: 7,
      name: 'Técnico de Mecatrónica Automóvel',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Diagnóstico e reparação de sistemas automóveis',
      vacancies: 18,
      icon: '🚗',
      slug: 'tecnico-de-mecatronica-automovel'
    },
    {
      id: 8,
      name: 'Programador de Informática',
      type: 'Profissional',
      duration: '3 anos',
      description: 'Desenvolvimento de software, aplicações web e mobile',
      vacancies: 25,
      icon: '💻',
      slug: 'programador-de-informatica'
    },
    {
      id: 9,
      name: 'Eletricista de Instalações',
      type: 'CEF',
      duration: '2 anos',
      description: 'Instalações elétricas residenciais e industriais',
      vacancies: 15,
      icon: '⚡',
      slug: 'eletricista-de-instalacoes'
    },
    {
      id: 10,
      name: 'Pastelaria/Padaria',
      type: 'CEF',
      duration: '2 anos',
      description: 'Confeção de bolos, pão e produtos de pastelaria',
      vacancies: 12,
      icon: '🥐',
      slug: 'pastelaria-padaria'
    },
    {
      id: 11,
      name: 'Empregado de Restaurante/Bar',
      type: 'CEF',
      duration: '2 anos',
      description: 'Organização e execução de serviço de restaurante/bar',
      vacancies: 18,
      icon: '🍸',
      slug: 'empregado-de-restaurante-bar'
    }
  ];

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.type === filter);

  return (
    <main className="courses-page">
      {/* HERO SECTION */}
      <section className="courses-hero">
        <div className="container">
          <h1>🎓 Oferta Formativa 2025/2026</h1>
          <p className="hero-subtitle">
            Descubra os nossos {courses.length} cursos com <strong>92% de empregabilidade</strong>
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{courses.length}</span>
              <span className="stat-label">Cursos Disponíveis</span>
            </div>
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Cursos Profissionais</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Cursos CEF</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="courses-filter-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos os Cursos ({courses.length})
            </button>
            <button 
              className={`filter-tab ${filter === 'Profissional' ? 'active' : ''}`}
              onClick={() => setFilter('Profissional')}
            >
              Cursos Profissionais (8)
            </button>
            <button 
              className={`filter-tab ${filter === 'CEF' ? 'active' : ''}`}
              onClick={() => setFilter('CEF')}
            >
              Cursos CEF (3)
            </button>
          </div>
        </div>
      </section>

      {/* LISTA DE CURSOS */}
      <section className="courses-list-section">
        <div className="container">
          {filteredCourses.length === 0 ? (
            <div className="no-courses">
              <p>Nenhum curso encontrado com este filtro.</p>
              <button 
                className="btn btn-secondary"
                onClick={() => setFilter('all')}
              >
                Ver todos os cursos
              </button>
            </div>
          ) : (
            <>
              <div className="courses-header">
                <h2>
                  {filter === 'all' ? 'Todos os Cursos' : 
                   filter === 'Profissional' ? 'Cursos Profissionais' : 'Cursos CEF'}
                  <span className="courses-count"> ({filteredCourses.length})</span>
                </h2>
                <p className="courses-intro">
                  Formação prática com estágio em empresas parceiras e certificação reconhecida pelo mercado de trabalho.
                </p>
              </div>

              <div className="courses-grid">
                {filteredCourses.map(course => (
                  <div key={course.id} className="course-card">
                    <div className="course-card-header">
                      <div className="course-icon">{course.icon}</div>
                      <span className={`course-type ${course.type === 'Profissional' ? 'type-profissional' : 'type-cef'}`}>
                        {course.type}
                      </span>
                    </div>
                    
                    <div className="course-card-body">
                      <h3>{course.name}</h3>
                      <p className="course-description">{course.description}</p>
                      
                      <div className="course-details">
                        <div className="detail">
                          <span className="detail-label">Duração:</span>
                          <span className="detail-value">{course.duration}</span>
                        </div>
                        <div className="detail">
                          <span className="detail-label">Vagas:</span>
                          <span className={`detail-value ${course.vacancies < 10 ? 'low-vacancies' : ''}`}>
                            {course.vacancies} lugares
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="course-card-footer">
                      <Link to={`/cursos/${course.slug}`} className="btn btn-outline">
                        ℹ️ Mais Informações
                      </Link>
                      <Link to="/inscricoes" className="btn btn-primary">
                        📝 Inscrever-me
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="courses-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Não encontrou o curso ideal?</h2>
            <p>
              Contacte a nossa equipa para marcar uma visita ou esclarecer dúvidas sobre 
              os cursos e processo de inscrição. Estamos disponíveis para ajudar!
            </p>
            <div className="cta-buttons">
              <Link to="/contactos" className="btn btn-secondary btn-xl">
                📞 Contactar Secretaria
              </Link>
              <Link to="/inscricoes" className="btn btn-primary btn-xl">
                📝 Pré-inscrição Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
