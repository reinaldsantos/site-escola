// src/pages/News/NovoCursoMultimedia.jsx
import { Link } from 'react-router-dom';
import './NoticiaDetalhe.css';

const NovoCursoMultimedia = () => {
  return (
    <main className="noticia-detalhe-page">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / 
          <Link to="/noticias">Notícias</Link> / 
          <span>Novo Curso</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="noticia-hero" style={{ backgroundColor: '#2196F320' }}>
        <div className="container">
          <div className="noticia-header">
            <div className="category-badge" style={{ backgroundColor: '#2196F3' }}>
              Cursos
            </div>
            <div className="featured-badge">
              ⭐ Destaque
            </div>
          </div>
          
          <h1>Novo Curso de Multimédia</h1>
          
          <div className="noticia-meta">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span className="meta-label">Autor:</span>
              <span className="meta-value">Direção Pedagógica</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-label">Publicado em:</span>
              <span className="meta-value">10 de Janeiro, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="noticia-content">
        <div className="container">
          <div className="content-grid">
            {/* MAIN CONTENT */}
            <div className="main-content">
              {/* IMAGEM PRINCIPAL */}
              <div className="images-grid">
                <div className="image-container">
                  <div style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '5rem',
                    borderRadius: '10px'
                  }}>
                    🎨
                  </div>
                </div>
              </div>

              {/* CONTEÚDO COMPLETO */}
              <div className="full-content">
                <h2>Lançamento do Novo Curso de Multimédia</h2>
                <p>Estamos orgulhosos em anunciar o lançamento do nosso novo curso técnico de Multimédia, que irá preparar os alunos para as demandas do mercado criativo digital.</p>
                
                <h3>🎯 Áreas de Estudo:</h3>
                <ul>
                  <li><strong>Design Gráfico:</strong> Adobe Photoshop, Illustrator, InDesign</li>
                  <li><strong>Edição de Vídeo:</strong> Adobe Premiere, After Effects</li>
                  <li><strong>Fotografia Digital:</strong> Técnicas de captura e edição</li>
                  <li><strong>Web Design:</strong> HTML, CSS, JavaScript, WordPress</li>
                  <li><strong>Motion Graphics:</strong> Animações 2D e 3D</li>
                  <li><strong>UI/UX Design:</strong> Design de interfaces e experiência do usuário</li>
                </ul>
                
                <h3>📅 Duração e Certificação:</h3>
                <p>O curso tem duração de 2 anos (4 semestres) e confere <strong>Certificação Profissional Nível IV</strong>.</p>
                
                <h3>💼 Saídas Profissionais:</h3>
                <ul>
                  <li>Designer Gráfico</li>
                  <li>Editor de Vídeo</li>
                  <li>Web Designer</li>
                  <li>Motion Designer</li>
                  <li>Fotógrafo Digital</li>
                  <li>UI/UX Designer</li>
                  <li>Social Media Designer</li>
                </ul>
                
                <h3>🎓 Requisitos de Acesso:</h3>
                <ul>
                  <li>12º ano completo ou equivalente</li>
                  <li>Prova de Aptidão (apresentação de portfólio)</li>
                  <li>Entrevista de seleção</li>
                </ul>
                
                <div className="cta-box">
                  <p><strong>📞 Mais informações:</strong> coordenacao@escola.edu.pt | 255 123 457</p>
                  <p><strong>📍 Inscrições:</strong> Até 31 de Março de 2025</p>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
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
                  
                  <Link to="/noticias/laboratorios-informatica" className="related-item">
                    <span className="related-category" style={{ color: '#795548' }}>
                      Infraestrutura
                    </span>
                    <h4>Novos Laboratórios de Informática</h4>
                    <span className="related-date">📅 5 de Janeiro, 2025</span>
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

      {/* BACK BUTTON */}
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

export default NovoCursoMultimedia;
