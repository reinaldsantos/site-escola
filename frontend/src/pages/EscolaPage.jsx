﻿import React from 'react';
import './EscolaPage.css';

const EscolaPage = () => {
  const schoolInfo = [
    { number: '1998', label: 'Ano de Fundação' },
    { number: '25+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Cursos Realizados' },
    { number: '1000+', label: 'Alunos Formados' },
    { number: '50+', label: 'Professores Qualificados' },
    { number: '20+', label: 'Parcerias Ativas' }
  ];

  const values = [
    { title: 'Excelência', desc: 'Compromisso com a qualidade na formação e nos resultados' },
    { title: 'Inclusão', desc: 'Educação acessível a todos, promovendo a igualdade de oportunidades' },
    { title: 'Inovação', desc: 'Adaptação constante às novas tecnologias e metodologias' },
    { title: 'Internacionalização', desc: 'Visão global e preparação para o mercado internacional' }
  ];

  return (
    <div className="simple-container escola-page">
      <div className="simple-header">
        <h1>Escola</h1>
        <p className="header-subtitle">
          Escola Profissional do Fundão - Excelência na Formação Profissional desde 1998
        </p>
      </div>

      <div className="simple-content">
        <section className="content-section">
          <h2 className="section-title">Sobre a EPF</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#37474f', marginBottom: '2rem' }}>
            A Escola Profissional do Fundão (EPF) é uma instituição de ensino profissional 
            que se destaca pela qualidade da sua formação e pelo sucesso dos seus alunos no 
            mercado de trabalho. Fundada em 1998, a EPF tem como missão principal proporcionar 
            uma formação técnica e humana de excelência, preparando os jovens para os desafios 
            do mercado de trabalho e para a vida em sociedade.
          </p>
          
          <div className="minimal-grid">
            {schoolInfo.map((info, index) => (
              <div key={index} className="minimal-item">
                <div style={{ fontSize: '2.5rem', fontWeight: '300', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                  {info.number}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#546e7a', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {info.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Os Nossos Valores</h2>
          <div className="minimal-grid">
            {values.map((value, index) => (
              <div key={index} className="minimal-item">
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EscolaPage;