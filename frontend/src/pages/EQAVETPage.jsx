import React from 'react';
import './EQAVETPage.css';

const EQAVETPage = () => {
  const documents = [
    { title: 'Selo de Conformidade EQAVET', highlight: false },
    { title: 'Documento Base', highlight: false },
    { title: 'Plano de Ação', highlight: false },
    { title: 'Relatório do Operador', highlight: false },
    { title: 'Plano de Ação Integrado', highlight: false },
    { title: 'Relatório de Verificação EQAVET', highlight: false },
    { title: 'Manual de processos, procedimentos e gestão documental do sistema de gestão da qualidade', highlight: false },
    { title: 'Relatórios de Acompanhamento', highlight: false },
    { title: 'Relatórios de Progresso Anual', highlight: false },
    { title: 'Certificação EQAVET 2020-2023', highlight: true }
  ];

  const qualityCycle = [
    { step: 1, title: 'Planear', description: 'Definir objetivos e planos de ação' },
    { step: 2, title: 'Implementar', description: 'Executar as ações planeadas' },
    { step: 3, title: 'Avaliar', description: 'Verificar resultados e impactos' },
    { step: 4, title: 'Rever', description: 'Analisar e melhorar continuamente' }
  ];

  const objectives = [
    'Aumentar o número de mobilidades Erasmus+ em 30%',
    'Expandir a rede de parceiros internacionais',
    'Implementar projetos de cooperação internacional',
    'Promover a dimensão europeia da formação profissional',
    'Fortalecer a empregabilidade internacional dos alunos'
  ];

  return (
    <div className="eqavet-container">
      <div className="eqavet-header">
        <div className="header-content">
          <h1>EQAVET</h1>
          <p className="subtitle">
            Quadro de Referência Europeu de Garantia da Qualidade para o Ensino e Formação Profissionais
          </p>
        </div>
      </div>

      <div className="eqavet-content">
        <section className="intro-section">
          <p>
            O Quadro de Referência Europeu de Garantia da Qualidade para o Ensino e 
            Formação Profissionais (EQAVET) é um instrumento de referência que ajuda 
            os Estados-Membros a promover e monitorizar a melhoria contínua dos seus 
            sistemas de Ensino e Formação Profissionais (EFP) com base em referências 
            comuns acordadas a nível europeu.
          </p>
        </section>

        <section className="documents-section">
          <h2>Documentação EQAVET</h2>
          <p className="section-desc">
            Documentação completa do sistema de qualidade implementado na Escola Profissional do Fundão
          </p>
          
          <div className="documents-list">
            {documents.map((doc, index) => (
              <div key={index} className={`document-item ${doc.highlight ? 'highlight' : ''}`}>
                <div className="document-content">
                  <h3>{doc.title}</h3>
                  {doc.highlight && <span className="document-badge">Certificação Atual</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="quality-cycle">
          <h2>Ciclo de Qualidade EQAVET</h2>
          <div className="cycle-grid">
            {qualityCycle.map((item) => (
              <div key={item.step} className="cycle-item">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="strategic-plan">
          <div className="plan-header">
            <h2>Plano Estratégico de Internacionalização 2020/2025</h2>
            <div className="plan-period">2020 - 2025</div>
          </div>
          
          <div className="plan-content">
            <p>
              A Escola Profissional do Fundão desenvolveu um Plano Estratégico de 
              Internacionalização para o período 2020-2025, com o objetivo de consolidar 
              e expandir a sua presença internacional, promovendo a mobilidade de alunos 
              e staff, e estabelecendo parcerias estratégicas com instituições europeias 
              e internacionais.
            </p>
            
            <div className="objectives">
              <h3>Objetivos Estratégicos</h3>
              <ul className="objectives-list">
                {objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EQAVETPage;
