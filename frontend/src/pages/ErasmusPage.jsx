// src/pages/ErasmusPage.jsx - VERSÃO SEM CORES VERDES
import React from "react";
import "./ErasmusPage.css";
import ErasmusStats from "../components/ErasmusStats";

const ErasmusPage = () => {
  const durations = [
    { type: "Formação Inicial", time: "1 Mês", desc: "Estágio para jovens em formação" },
    { type: "Graduados", time: "3 Meses", desc: "Estágio para jovens graduados" },
    { type: "Staff", time: "5 Dias", desc: "Mobilidade para staff Educação e Formação" },
    { type: "Estudantes", time: "5-12 Meses", desc: "Estágio para estudantes do ensino superior" }
  ];

  return (
    <div className="erasmus-page">
      
      {/* Cabeçalho */}
      <div className="erasmus-header">
        <h1>ERASMUS+</h1>
        <p className="erasmus-subtitle">
          EPF um Projeto de Formação, também Europeu!
        </p>
      </div>

      {/* Introdução */}
      <div className="intro-section">
        <p style={{ color: "#333", lineHeight: "1.8", fontSize: "1.1rem" }}>
          A Escola Profissional do Fundão tem possibilitado, desde 1998, estágios europeus 
          a muitos dos seus alunos e professores no âmbito dos programas europeus Leonardo da Vinci 
          e, atualmente, Erasmus +. Estes, assumem-se como um dos pilares do Projeto Educativo 
          da escola contribuindo para a formação e capacitação dos seus alunos e profissionais 
          e, simultaneamente, para os desafios da nova organização do mercado de trabalho global.
        </p>
        <p style={{ color: "#333", lineHeight: "1.8", fontSize: "1.1rem", marginTop: "20px" }}>
          Participar em projetos de mobilidade europeus é preparar cidadãos para novos ambientes 
          sociais, culturais e organizacionais valorizando-se e incentivando-se o processo de 
          formação continua, já que estas áreas de atividade obrigam a uma constante melhoria 
          e conhecimento das novas tecnologias e processos.
        </p>
      </div>

      {/* Estatísticas */}
      <ErasmusStats />

      {/* Durações */}
      <div className="durations-section">
        <h2 className="section-title">TIPOS DE MOBILIDADE</h2>
        <div className="durations-grid">
          {durations.map((duration, index) => (
            <div key={index} className="duration-card">
              <h3 className="duration-type" style={{ color: "#003366" }}>
                {duration.type}
              </h3>
              <div className="duration-time" style={{ color: "#003366" }}>
                {duration.time}
              </div>
              <p className="duration-desc" style={{ color: "#555" }}>
                {duration.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ErasmusPage;
