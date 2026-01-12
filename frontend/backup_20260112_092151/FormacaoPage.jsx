import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FormacaoPage.css";
import cursosConfig from "../config/cursosConfig";
import CursosGrid from "../components/cursos/CursosGrid";
import CursoCard from "../components/cursos/CursoCard";

const FormacaoPage = () => {
  const [cursos, setCursos] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar dados dos cursos
    const carregarCursos = () => {
      try {
        // Transformar dados da configuração
        const todosCursos = [];
        const todasAreas = cursosConfig.areas;
        
        todasAreas.forEach(area => {
          area.cursos.forEach(curso => {
            todosCursos.push({
              ...curso,
              areaId: area.id
            });
          });
        });
        
        setCursos(todosCursos);
        setAreas(todasAreas);
      } catch (error) {
        console.error("Erro ao carregar cursos:", error);
      } finally {
        setLoading(false);
      }
    };
    
    carregarCursos();
  }, []);

  if (loading) {
    return (
      <div className="formacao-loading">
        <div className="spinner"></div>
        <p>Carregando cursos...</p>
      </div>
    );
  }

  return (
    <div className="formacao-page-moderno">
      {/* HERO SECTION */}
      <section className="formacao-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Formação Profissional</h1>
            <p className="hero-subtitle">
              Educação que transforma vidas e constrói carreiras
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{cursos.length}</span>
                <span className="stat-label">Cursos</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Áreas</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Estágio</span>
              </div>
              <div className="stat">
                <span className="stat-number">Erasmus+</span>
                <span className="stat-label">Internacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE FORMAÇÃO */}
      <section className="areas-section">
        <div className="container">
          <div className="section-header">
            <h2>Áreas de Formação</h2>
            <p>Escolha sua área de interesse e explore os cursos disponíveis</p>
          </div>
          
          <div className="areas-grid">
            {cursosConfig.areas.map((area) => (
              <Link 
                key={area.id} 
                to={`/cursos?area=${area.id}`}
                className="area-card-link"
              >
                <div className="area-card" style={{ backgroundColor: area.cor + '20', borderColor: area.cor }}>
                  <div className="area-card-icon" style={{ color: area.cor }}>
                    {area.icon}
                  </div>
                  <h3>{area.nome}</h3>
                  <p className="area-cursos-count">
                    {area.cursos.length} curso{area.cursos.length !== 1 ? 's' : ''}
                  </p>
                  <span className="area-explorar">
                    Explorar →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TODOS OS CURSOS EM GRID */}
      <section className="cursos-section">
        <div className="container">
          <div className="section-header">
            <h2>Todos os Cursos</h2>
            <p>Formação profissional completa com certificação reconhecida</p>
          </div>
          
          <CursosGrid cursos={cursos} areas={areas} />
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="beneficios-section">
        <div className="container">
          <div className="section-header">
            <h2>Porque Escolher a EPF</h2>
            <p>Vantagens exclusivas da nossa formação profissional</p>
          </div>
          
          <div className="beneficios-grid">
            <div className="beneficio-card">
              <div className="beneficio-icon">🎓</div>
              <h3>Certificação Dupla</h3>
              <p>Diploma profissional + Equivalência ao 12º ano</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">💼</div>
              <h3>Estágio Remunerado</h3>
              <p>Experiência em empresas parceiras com possibilidade de contrato</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">🌍</div>
              <h3>Mobilidade Internacional</h3>
              <p>Programas Erasmus+ em vários países europeus</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">👨‍🏫</div>
              <h3>Corpo Docente</h3>
              <p>Professores com vasta experiência profissional</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">💻</div>
              <h3>Laboratórios Modernos</h3>
              <p>Equipamentos atualizados e tecnologia de ponta</p>
            </div>
            <div className="beneficio-card">
              <div className="beneficio-icon">🤝</div>
              <h3>Parcerias Empresariais</h3>
              <p>Rede de empresas para estágios e empregabilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA INSCRIÇÃO */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para Transformar seu Futuro?</h2>
            <p>Inscreva-se agora e dê o primeiro passo na sua carreira profissional</p>
            <div className="cta-buttons">
              <Link to="/inscricao" className="btn-cta-primary">
                🎯 Inscrever-se Agora
              </Link>
              <Link to="/contactos" className="btn-cta-secondary">
                📞 Falar com Secretaria
              </Link>
            </div>
            <p className="cta-info">
              📅 Inscrições abertas todo o ano | 📞 275 000 000 | ✉️ secretaria@epf.edu.pt
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormacaoPage;
