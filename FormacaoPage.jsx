import { Link } from 'react-router-dom';
import React from 'react';
import './FormacaoPage.css';
import cursosConfig from '../config/cursosConfig';

const FormacaoPage = () => {
  return (
    <div className="simple-container formacao-page">
      <div className="simple-header">
        <h1>Formação</h1>
        <p className="header-subtitle">
          Oferta Formativa da Escola Profissional do Fundão
        </p>
      </div>

      <div className="simple-content">
        <section className="content-section">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#37474f', marginBottom: '3rem' }}>
            A EPF oferece formação profissional de qualidade nas áreas mais requisitadas pelo mercado. 
            Todos os cursos incluem estágio profissional, certificação reconhecida e oportunidades Erasmus+.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Áreas de Formação</h2>
          
          <div className="areas-grid-original">
            {cursosConfig.areas.map((area) => (
              <div key={area.id} className="area-card-original" style={{ borderColor: area.cor }}>
                <div className="area-header-original">
                  <span className="area-icon-original">{area.icon}</span>
                  <h3 style={{ color: area.cor }}>{area.nome}</h3>
                </div>
                
                <div className="cursos-lista-original">
                  {area.cursos.map((curso) => (
                    <div key={curso.id} className="curso-item-original">
                      <div className="curso-info-original">
                        <h4>{curso.nome}</h4>
                        <p className="curso-descricao-curta">{curso.descricao}</p>
                        
                        <div className="curso-detalhes-rapidos">
                          <span className="detalhe-rapido">
                            <strong>Duração:</strong> {curso.duracao}
                          </span>
                          <span className="detalhe-rapido">
                            <strong>Certificação:</strong> {curso.certificacao}
                          </span>
                        </div>
                      </div>
                      
                      <div className="curso-actions-original">
                        <a 
                          href={`/cursos/${curso.modulo}`} 
                          className="btn-ver-curso"
                        >
                          Ver Curso Completo →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Vantagens da Formação na EPF</h2>
          <div className="minimal-grid">
            <div className="minimal-item">
              <h3>🏆 Certificação</h3>
              <p>Diplomas reconhecidos nacional e internacionalmente, com equivalência ao ensino secundário.</p>
            </div>
            <div className="minimal-item">
              <h3>💼 Estágios</h3>
              <p>Experiência prática em empresas parceiras da região e possibilidade de contratação.</p>
            </div>
            <div className="minimal-item">
              <h3>🌍 Erasmus+</h3>
              <p>Oportunidades de mobilidade internacional em empresas europeias.</p>
            </div>
            <div className="minimal-item">
              <h3>👨‍🏫 Professores</h3>
              <p>Corpo docente com experiência profissional na área que lecionam.</p>
            </div>
          </div>
        </section>

        <section className="content-section info-adicional">
          <h2 className="section-title">Como Funciona</h2>
          <div className="processo-inscricao">
            <div className="etapa">
              <div className="etapa-numero">1</div>
              <h4>Escolha o Curso</h4>
              <p>Selecione uma das áreas acima e veja o curso completo</p>
            </div>
            <div className="etapa">
              <div className="etapa-numero">2</div>
              <h4>Veja os Detalhes</h4>
              <p>Acesse a página do curso com todas as informações</p>
            </div>
            <div className="etapa">
              <div className="etapa-numero">3</div>
              <h4>Inscreva-se</h4>
              <p>Preencha o formulário de inscrição online</p>
            </div>
            <div className="etapa">
              <div className="etapa-numero">4</div>
              <h4>Início das Aulas</h4>
              <p>Integre-se na turma em setembro</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormacaoPage;


