// src/pages/News/InscricoesAbertas.jsx
import { Link } from 'react-router-dom';
import './NoticiaDetalhe.css';

const InscricoesAbertas = () => {
  return (
    <main className="noticia-detalhe-page">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / 
          <Link to="/noticias">Notícias</Link> / 
          <span>Inscrições 2025/2026</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="noticia-hero" style={{ backgroundColor: '#4CAF5020' }}>
        <div className="container">
          <div className="noticia-header">
            <div className="category-badge" style={{ backgroundColor: '#4CAF50' }}>
              Inscrições
            </div>
            <div className="featured-badge">
              ⭐ Destaque
            </div>
          </div>
          
          <h1>Inscrições 2025/2026 Abertas</h1>
          
          <div className="noticia-meta">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span className="meta-label">Autor:</span>
              <span className="meta-value">Secretaria</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-label">Publicado em:</span>
              <span className="meta-value">15 de Janeiro, 2025</span>
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
                    background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '5rem',
                    borderRadius: '10px'
                  }}>
                    📋
                  </div>
                </div>
              </div>

              {/* CONTEÚDO COMPLETO */}
              <div className="full-content">
                <h2>Inscrições Abertas para o Ano Letivo 2025/2026</h2>
                <p>O processo de candidatura para novos alunos já se encontra disponível online através do nosso portal.</p>
                
                <h3>📋 Como se inscrever:</h3>
                <ul>
                  <li>Acesso ao portal de inscrições no nosso site</li>
                  <li>Preenchimento do formulário online</li>
                  <li>Upload dos documentos necessários</li>
                  <li>Submissão da candidatura</li>
                </ul>
                
                <h3>📅 Datas Importantes:</h3>
                <ul>
                  <li><strong>Início das inscrições:</strong> 9 de Janeiro de 2025</li>
                  <li><strong>Fim das inscrições:</strong> 31 de Julho de 2025</li>
                  <li><strong>Divulgação de resultados:</strong> 15 de Agosto de 2025</li>
                  <li><strong>Matrículas:</strong> 1 a 15 de Setembro de 2025</li>
                </ul>
                
                <h3>📄 Documentação Necessária:</h3>
                <ul>
                  <li>Cartão de Cidadão/Bilhete de Identidade</li>
                  <li>Número de Identificação Fiscal (NIF)</li>
                  <li>Número de Utente do Serviço Nacional de Saúde</li>
                  <li>Cartão de Segurança Social (se aplicável)</li>
                  <li>Certificado de Habilitações</li>
                  <li>Fotografia tipo passe</li>
                </ul>
                
                <div className="cta-box">
                  <p><strong>📍 Inscrições Presenciais:</strong> Também disponíveis na nossa secretaria, de segunda a sexta, das 9h às 18h.</p>
                  <p><strong>📞 Contactos:</strong> 255 123 456 | secretaria@escola.edu.pt</p>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="sidebar">
              <div className="sidebar-card">
                <h3>📰 Outras Notícias</h3>
                <div className="related-news">
                  <Link to="/noticias/novo-curso" className="related-item">
                    <span className="related-category" style={{ color: '#2196F3' }}>
                      Cursos
                    </span>
                    <h4>Novo Curso de Multimédia</h4>
                    <span className="related-date">📅 10 de Janeiro, 2025</span>
                  </Link>
                  
                  <Link to="/noticias/torneio-futebol" className="related-item">
                    <span className="related-category" style={{ color: '#FF5722' }}>
                      Eventos
                    </span>
                    <h4>Torneio de Futebol da EPF</h4>
                    <span className="related-date">📅 15 de Dezembro, 2024</span>
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

export default InscricoesAbertas;
