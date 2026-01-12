import React from "react";
import { Link } from "react-router-dom";
import "./FormacaoPage.css";
import cursosConfig from "../config/cursosConfig";

const FormacaoPage = () => {
  // IMAGENS - USA AS SUAS 6 IMAGENS + 1 ONLINE
  const getImagemCurso = (cursoId) => {
    const imagensLocais = {
      1: "/images/cursos/manutencao.jpg",
      2: "/images/cursos/automovel.jpg", 
      3: "/images/cursos/alimentacao.jpg",
      5: "/images/cursos/construcao.jpg",
      6: "/images/cursos/informatica.jpg",
      7: "/images/cursos/comercio.jpg"
    };

    // Curso 4 não tem imagem local, usa online
    if (cursoId === 4) {
      return "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=600&fit=crop&q=80";
    }

    // Retorna imagem local ou fallback
    return imagensLocais[cursoId] || "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop&q=80";
  };

  // O RESTO DO CÓDIGO PERMANECE IGUAL AO ORIGINAL
  return (
    <div className="formacao-profissional">
      <div className="formacao-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Formação Profissional</h1>
            <p className="hero-subtitle">
              Educação que transforma vidas. Carreiras que constroem o futuro.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cursos-grid-section">
          <div className="section-header">
            <h2>Nossos Cursos</h2>
            <p className="section-description">
              Escolha entre 7 cursos profissionais com certificação reconhecida
            </p>
          </div>

          <div className="cursos-grid">
            {cursosConfig.areas.map((area) => (
              <React.Fragment key={area.id}>
                {area.cursos.map((curso) => (
                  <div className="curso-card" key={curso.id}>
                    <div className="curso-badge" style={{ backgroundColor: area.cor }}>
                      <span className="badge-icon">{area.icon}</span>
                      <span className="badge-text">{area.nome}</span>
                    </div>

                    <div className="curso-image">
                      <img 
                        src={getImagemCurso(curso.id)} 
                        alt={curso.nome}
                        className="curso-img"
                        loading="lazy"
                      />
                    </div>

                    <div className="curso-info">
                      <h3 className="curso-title">{curso.nome}</h3>
                      <p className="curso-description">{curso.descricao}</p>

                      <div className="curso-meta">
                        <div className="meta-item">
                          <span className="meta-icon">⏱️</span>
                          <div className="meta-content">
                            <div className="meta-label">Duração</div>
                            <div className="meta-value">{curso.duracao}</div>
                          </div>
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">📜</span>
                          <div className="meta-content">
                            <div className="meta-label">Certificação</div>
                            <div className="meta-value">{curso.certificacao}</div>
                          </div>
                        </div>
                      </div>

                      {curso.saidas && (
                        <div className="saidas-section">
                          <div className="saidas-label">Saídas Profissionais</div>
                          <div className="saidas-list">
                            {curso.saidas.map((saida, index) => (
                              <span key={index} className="saida-item">{saida}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      <Link to={`/cursos/${curso.id}`} className="curso-btn">
                        Ver Curso Completo
                      </Link>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="beneficios-section">
          <div className="section-header">
            <h2>Vantagens da EPF</h2>
            <p className="section-description">
              Porque somos a melhor escolha para a sua formação
            </p>
          </div>

          <div className="beneficios-grid">
            <div className="beneficio-card">
              <div className="beneficio-icon">🎓</div>
              <h3>Certificação Oficial</h3>
              <p>Diploma reconhecido nacionalmente com equivalência ao 12º ano</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">💼</div>
              <h3>Estágio Garantido</h3>
              <p>Experiência prática em empresas parceiras com possibilidade de contrato</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">🌍</div>
              <h3>Erasmus+</h3>
              <p>Mobilidade internacional em países europeus</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">👨‍🏫</div>
              <h3>Professores Especialistas</h3>
              <p>Corpo docente com vasta experiência profissional</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>Pronto para Começar?</h2>
            <p>Inscreva-se agora e dê o primeiro passo na sua carreira profissional</p>
            <div className="cta-buttons">
              <Link to="/inscricao" className="cta-btn primary">
                🎯 Inscreva-se Agora
              </Link>
              <Link to="/contactos" className="cta-btn secondary">
                📞 Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormacaoPage;
