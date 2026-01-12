// src/pages/News/FeiraEmpregabilidade.jsx
import { Link } from 'react-router-dom';
import './NoticiaDetalhe.css';

const FeiraEmpregabilidade = () => {
  return (
    <main className="noticia-detalhe-page">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / 
          <Link to="/noticias">Notícias</Link> / 
          <span>Empregabilidade</span>
        </div>
      </div>

      <section className="noticia-hero" style={{ backgroundColor: '#FF980020' }}>
        <div className="container">
          <div className="noticia-header">
            <div className="category-badge" style={{ backgroundColor: '#FF9800' }}>
              Empregabilidade
            </div>
          </div>
          
          <h1>Feira de Empregabilidade</h1>
          
          <div className="noticia-meta">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span className="meta-label">Autor:</span>
              <span className="meta-value">Direção</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-label">Publicado em:</span>
              <span className="meta-value">7 de Janeiro, 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="noticia-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="full-content">
                <h2>30 Empresas Recrutam na Nossa Feira Anual de Empregabilidade</h2>
                <p>A nossa feira anual de empregabilidade contará com a participação de 30 empresas de diversos setores, oferecendo oportunidades de estágio e emprego aos nossos alunos e finalistas.</p>
                
                <h3>🏢 Empresas Participantes:</h3>
                <ul>
                  <li><strong>Tecnologia:</strong> TechSolutions, SoftwareHouse, WebInnovate</li>
                  <li><strong>Design:</strong> CreativeStudio, PixelMasters</li>
                  <li><strong>Gestão:</strong> BusinessConsult, FinancePro</li>
                  <li><strong>Turismo:</strong> TravelExperts, HotelManagement</li>
                </ul>
                
                <h3>📅 Informações do Evento:</h3>
                <ul>
                  <li><strong>Data:</strong> 25 de Janeiro, 2025</li>
                  <li><strong>Hora:</strong> 10h00 - 17h00</li>
                  <li><strong>Local:</strong> Pavilhão Gimnodesportivo</li>
                  <li><strong>Público:</strong> Alunos, Finalistas e Ex-alunos</li>
                </ul>
                
                <div className="cta-box">
                  <p><strong>📍 Preparação para a Feira:</strong> Traga o seu CV atualizado e esteja preparado para entrevistas rápidas.</p>
                  <p><strong>📞 Informações:</strong> empregabilidade@escola.edu.pt | 255 123 457</p>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card">
                <h3>📰 Outras Notícias</h3>
                <div className="related-news">
                  <Link to="/noticias/inscricoes-abertas" className="related-item">
                    <span className="related-category" style={{ color: '#4CAF50' }}>
                      Inscrições
                    </span>
                    <h4>Inscrições 2025/2026 Abertas</h4>
                    <span className="related-date">📅 15 de Janeiro, 2025</span>
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

export default FeiraEmpregabilidade;
