// src/pages/News/TorneioFutebol.jsx
import { Link } from 'react-router-dom';
import './NoticiaDetalhe.css';

const TorneioFutebol = () => {
  return (
    <main className="noticia-detalhe-page">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / 
          <Link to="/noticias">Notícias</Link> / 
          <span>Eventos Desportivos</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="noticia-hero" style={{ backgroundColor: '#FF572220' }}>
        <div className="container">
          <div className="noticia-header">
            <div className="category-badge" style={{ backgroundColor: '#FF5722' }}>
              Eventos Desportivos
            </div>
            <div className="featured-badge">
              ⭐ Destaque
            </div>
          </div>
          
          <h1>Torneio de Futebol da EPF - Dezembro 2024</h1>
          
          <div className="noticia-meta">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span className="meta-label">Autor:</span>
              <span className="meta-value">Desporto Escolar</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span className="meta-label">Publicado em:</span>
              <span className="meta-value">15 de Dezembro, 2024</span>
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
                    background: 'linear-gradient(135deg, #FF5722 0%, #BF360C 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '5rem',
                    borderRadius: '10px'
                  }}>
                    ⚽
                  </div>
                </div>
              </div>

              {/* CONTEÚDO COMPLETO */}
              <div className="full-content">
                <h2>Torneio de Futebol Anual da EPF</h2>
                <p>O tradicional Torneio de Futebol da EPF realizou-se no dia 15 de Dezembro de 2024, reunindo todas as turmas da escola num dia de competição saudável e convívio desportivo.</p>
                
                <h3>📊 Resultados do Torneio:</h3>
                <div className="results-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Posição</th>
                        <th>Equipa</th>
                        <th>Curso</th>
                        <th>Pontos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>🥇 1º</td>
                        <td>Os Invictos</td>
                        <td>Informática</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>🥈 2º</td>
                        <td>Os Velozes</td>
                        <td>Gestão</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>🥉 3º</td>
                        <td>Os Campeões</td>
                        <td>Multimédia</td>
                        <td>8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3>🏅 Prémios:</h3>
                <ul>
                  <li><strong>1º Lugar:</strong> Troféu + Medalhas + Voucher para material desportivo</li>
                  <li><strong>2º Lugar:</strong> Medalhas + Voucher para material escolar</li>
                  <li><strong>3º Lugar:</strong> Medalhas</li>
                  <li><strong>Melhor Jogador:</strong> João Silva (Curso de Informática)</li>
                  <li><strong>Melhor Guarda-redes:</strong> Miguel Santos (Curso de Gestão)</li>
                </ul>
                
                <h3>📸 Momentos do Torneio:</h3>
                <p>O torneio foi marcado por grandes momentos desportivos, fair-play entre as equipas e muita animação por parte dos colegas que vieram apoiar.</p>
                
                <div className="event-details">
                  <h4>ℹ️ Informações do Evento:</h4>
                  <p><strong>Data:</strong> 15 de Dezembro de 2024</p>
                  <p><strong>Local:</strong> Campo Desportivo da Escola</p>
                  <p><strong>Participantes:</strong> 12 equipas (total de 120 alunos)</p>
                  <p><strong>Organização:</strong> Departamento de Educação Física</p>
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
                  
                  <Link to="/noticias/dia-epf" className="related-item">
                    <span className="related-category" style={{ color: '#2196F3' }}>
                      Eventos Escolares
                    </span>
                    <h4>Dia da EPF - 15 de Outubro</h4>
                    <span className="related-date">📅 15 de Outubro, 2024</span>
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

export default TorneioFutebol;
