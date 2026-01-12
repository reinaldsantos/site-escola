// src/pages/News/LaboratoriosInformatica.jsx
import { Link } from 'react-router-dom';
import './NoticiaDetalhe.css';

const LaboratoriosInformatica = () => {
  return (
    <main className="noticia-detalhe-page">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / 
          <Link to="/noticias">Notícias</Link> / 
          <span>Infraestrutura</span>
        </div>
      </div>

      <section className="noticia-hero" style={{ backgroundColor: '#79554820' }}>
        <div className="container">
          <div className="noticia-header">
            <div className="category-badge" style={{ backgroundColor: '#795548' }}>
              Infraestrutura
            </div>
          </div>
          
          <h1>Novos Laboratórios de Informática</h1>
          
          <div className="noticia-meta">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span className="meta-label">Autor:</span>
              <span className="meta-value">Coordenação</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-label">Publicado em:</span>
              <span className="meta-value">5 de Janeiro, 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="noticia-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="images-grid">
                <div className="image-container">
                  <div style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(135deg, #795548 0%, #3E2723 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '5rem',
                    borderRadius: '10px'
                  }}>
                    🖥️
                  </div>
                </div>
              </div>

              <div className="full-content">
                <h2>Inauguração dos Novos Laboratórios de Informática</h2>
                <p>A nossa escola acaba de inaugurar dois novos laboratórios de informática totalmente equipados com tecnologia de última geração, proporcionando melhores condições de aprendizagem para os nossos alunos.</p>
                
                <h3>💻 Equipamento Instalado:</h3>
                <ul>
                  <li><strong>30 Computadores</strong> de última geração (i7, 16GB RAM, SSD 512GB)</li>
                  <li><strong>Monitores</strong> de 24" Full HD</li>
                  <li><strong>Rede Wi-Fi</strong> de alta velocidade</li>
                  <li><strong>Projetores</strong> interativos em cada laboratório</li>
                  <li><strong>Ar condicionado</strong> para melhor conforto</li>
                  <li><strong>Mobiliário</strong> ergonómico ajustável</li>
                </ul>
                
                <h3>🛠️ Software Disponibilizado:</h3>
                <div className="software-grid">
                  <div className="software-category">
                    <h4>Programação</h4>
                    <ul>
                      <li>Visual Studio Code</li>
                      <li>IntelliJ IDEA</li>
                      <li>Python 3.11</li>
                      <li>Java JDK 17</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                  <div className="software-category">
                    <h4>Design & Multimédia</h4>
                    <ul>
                      <li>Adobe Creative Cloud</li>
                      <li>Figma</li>
                      <li>Blender</li>
                      <li>Audacity</li>
                    </ul>
                  </div>
                </div>
                
                <div className="access-info">
                  <h4>📋 Horário de Utilização:</h4>
                  <p><strong>Segunda a Sexta:</strong> 8h30 às 19h00</p>
                  <p><strong>Sábado:</strong> 9h00 às 13h00 (para trabalhos de grupo)</p>
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

export default LaboratoriosInformatica;
