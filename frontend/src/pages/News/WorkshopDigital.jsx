// src/pages/News/WorkshopDigital.jsx
import { Link } from 'react-router-dom';
import './NoticiaDetalhe.css';

const WorkshopDigital = () => {
  return (
    <main className="noticia-detalhe-page">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / 
          <Link to="/noticias">Notícias</Link> / 
          <span>Workshops</span>
        </div>
      </div>

      <section className="noticia-hero" style={{ backgroundColor: '#00BCD420' }}>
        <div className="container">
          <div className="noticia-header">
            <div className="category-badge" style={{ backgroundColor: '#00BCD4' }}>
              Workshops
            </div>
          </div>
          
          <h1>Workshop: Competências Digitais</h1>
          
          <div className="noticia-meta">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span className="meta-label">Autor:</span>
              <span className="meta-value">Formação</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-label">Publicado em:</span>
              <span className="meta-value">15 de Dezembro, 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="noticia-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="full-content">
                <h2>Workshop Gratuito sobre Competências Digitais para a Empregabilidade</h2>
                <p>Inscrições abertas para todos os alunos interessados em desenvolver competências digitais essenciais para o mercado de trabalho atual.</p>
                
                <h3>🎯 Conteúdos do Workshop:</h3>
                <ul>
                  <li><strong>Ferramentas Digitais:</strong> Google Workspace, Microsoft 365</li>
                  <li><strong>Comunicação Online:</strong> Email profissional, videoconferências</li>
                  <li><strong>Segurança Digital:</strong> Proteção de dados, senhas seguras</li>
                  <li><strong>CV Digital:</strong> Criação de currículo online e LinkedIn</li>
                  <li><strong>Colaboração:</strong> Trabalho em equipa com ferramentas digitais</li>
                </ul>
                
                <h3>📅 Informações:</h3>
                <ul>
                  <li><strong>Data:</strong> 20 de Janeiro, 2025</li>
                  <li><strong>Hora:</strong> 14h00 - 17h00</li>
                  <li><strong>Local:</strong> Laboratório 3</li>
                  <li><strong>Inscrições:</strong> Gratuitas (vagas limitadas)</li>
                  <li><strong>Inscrição:</strong> Até 18 de Janeiro na secretaria</li>
                </ul>
                
                <div className="cta-box">
                  <p><strong>👨‍🏫 Formador:</strong> Prof. Carlos Silva (Especialista em Tecnologias Educativas)</p>
                  <p><strong>📞 Contacto:</strong> formacao@escola.edu.pt | 255 123 458</p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card">
                <h3>📰 Outras Notícias</h3>
                <div className="related-news">
                  <Link to="/noticias/feira-empregabilidade" className="related-item">
                    <span className="related-category" style={{ color: '#FF9800' }}>
                      Empregabilidade
                    </span>
                    <h4>Feira de Empregabilidade</h4>
                    <span className="related-date">📅 7 de Janeiro, 2025</span>
                  </Link>
                </div>
                <Link to="/noticias" className="btn btn-outline btn-block">
                  Ver todas as notícias
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="back-section">
        <div className="container">
          <Link to="/noticias" className="btn btn-primary">
            ← Voltar para Notícias
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WorkshopDigital;
