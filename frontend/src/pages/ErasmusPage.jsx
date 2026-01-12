import React from 'react';
import './ErasmusPage.css';

const ErasmusPage = () => {
  const stats = [
    { number: '681', label: 'Mobilidades' },
    { number: '15.131', label: 'Dias de Estágio' },
    { number: '172.172', label: 'Kms Percorridos' },
    { number: '281', label: 'Parceiros' },
    { number: '19', label: 'Países de Destino' },
    { number: '99%', label: 'Avaliação' }
  ];

  const durations = [
    { type: 'Formação Inicial', time: '1 Mês', desc: 'Estágio para jovens em formação' },
    { type: 'Graduados', time: '3 Meses', desc: 'Estágio para jovens graduados' },
    { type: 'Staff', time: '5 Dias', desc: 'Mobilidade para staff' }
  ];

  const infoItems = [
    'Regulamento ERASMUS+',
    'Candidaturas 2019',
    'Condições Oferecidas',
    'Candidatura',
    'Processo de Seleção de Participantes | Critérios',
    'Resultados da Seleção',
    'Parceiros | Entidades de Acolhimento e Intermediárias',
    'Calendário Estágios ERASMUS+ | Fluxos de Mobilidade',
    'Autorização de Saída de Menores do Território Nacional'
  ];

  return (
    <div className="erasmus-container">
      <div className="erasmus-header">
        <div className="header-content">
          <h1>Erasmus+</h1>
          <h2>EPF um Projeto de Formação, também Europeu!</h2>
          <p className="hashtag">#SomosEUROPA #SomosEPF</p>
        </div>
      </div>

      <div className="erasmus-content">
        <section className="intro-section">
          <p>
            A Escola Profissional do Fundão tem possibilitado, desde 1998, estágios europeus 
            a muitos dos seus alunos e professores no âmbito dos programas europeus Leonardo 
            da Vinci e, atualmente, Erasmus +. Estes, assumem-se como um dos pilares do 
            Projeto Educativo da escola contribuindo para a formação e capacitação dos seus 
            alunos e profissionais e, simultaneamente, para os desafios da nova organização 
            do mercado de trabalho global.
          </p>
          <p>
            Participar em projetos de mobilidade europeus é preparar cidadãos para novos 
            ambientes sociais, culturais e organizacionais valorizando-se e incentivando-se 
            o processo de formação continua, já que estas áreas de atividade obrigam a uma 
            constante melhoria e conhecimento das novas tecnologias e processos.
          </p>
        </section>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div className="certification-badge">
            <span className="certification-icon">🏅</span>
            <span>Escola Certificada Erasmus+ desde 1998</span>
          </div>
        </div>

        <section className="stats-section">
          <h2>O Nosso Impacto</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="charters-section">
          <div className="charter-item">
            <div className="charter-logo">
              <div className="real-image-container vet-image-container">
                <img 
                  src="/src/assets/erasmus/vet-mobility-charter.svg" 
                  alt="VET Mobility Charter" 
                  className="real-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="text-align: center; padding: 2rem; color: #004a8f;">
                        <div style="font-size: 1.8rem; font-weight: bold; margin-bottom: 0.5rem;">VET</div>
                        <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">Mobility Charter</div>
                        <div style="font-size: 0.8rem; color: #666;">powered by Erasmus+</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
            <h3 className="charter-title">VET Mobility Charter</h3>
            <p className="charter-subtitle">Certificado de Qualidade desde 2016</p>
          </div>
        </section>

        <section className="vet-section">
          <div className="vet-content">
            <h2>Somos uma Escola VET Mobility Charter</h2>
            <p>
              Enquanto forma de reconhecimento das boas práticas na operacionalização dos 
              projetos de mobilidade foi atribuído, em 2016, à Escola Profissional do Fundão 
              o Certificado de Qualidade VET Mobility Charter pela Agência Nacional Erasmus +. 
              Consideramos a obtenção deste selo de qualidade, relativamente à elevada categoria 
              dos projetos apresentados, aprovados e realizados, uma mais-valia para a nossa 
              escola, pretendendo-se, assim, dar continuidade ao caminho de internacionalização 
              por nós traçado.
            </p>
          </div>
        </section>

        <section className="intro-section">
          <h3 style={{ fontSize: '1.4rem', fontWeight: '400', color: '#004a8f', marginBottom: '2rem' }}>
            Duração dos Estágios
          </h3>
          <div className="duration-grid">
            {durations.map((item, index) => (
              <div key={index} className="duration-item">
                <h3>{item.type}</h3>
                <div className="duration-time">{item.time}</div>
                <p className="duration-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p style={{ marginTop: '2rem', color: '#455a64', lineHeight: '1.7' }}>
            A seleção de alunos para realizar uma mobilidade Erasmus surge de um convite ou 
            de um processo de seleção após candidatura, tendo sempre em conta o reconhecimento 
            do seu desempenho ao longo do seu percurso formativo.
          </p>
          
          <p style={{ color: '#455a64', lineHeight: '1.7' }}>
            O projeto disponibiliza aos alunos selecionados, viagem, seguro, alojamento, 
            alimentação e um apoio individual (transportes locais e outras despesas), além 
            da preparação linguística e cultural de acordo com o país de destino.
          </p>
        </section>

        <section className="info-section">
          <h3>Educação e Formação para o Ensino e Formação Profissional</h3>
          <ul className="info-list">
            {infoItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="funding-section">
          <h3 style={{ fontSize: '1.4rem', fontWeight: '400', color: '#004a8f', marginBottom: '1rem' }}>
            Financiamento e Apoio
          </h3>
          <p style={{ color: '#546e7a', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Este projeto é cofinanciado pelo programa Erasmus+ da União Europeia
          </p>
          
          <div className="funding-logos">
            <div className="funding-logo">
              <div className="real-image-container funding-image-container">
                <img 
                  src="/src/assets/erasmus/erasmus-cofinanciado.svg" 
                  alt="Cofinanciado pelo Erasmus+" 
                  className="real-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="text-align: center; padding: 1rem; color: #004a8f;">
                        <div style="font-size: 0.9rem; font-weight: bold;">Cofinanciado pelo</div>
                        <div style="font-size: 1.2rem; font-weight: bold; margin: 0.5rem 0;">Erasmus+</div>
                        <div style="font-size: 0.7rem; color: #666;">República Portuguesa</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
            
            <div className="funding-logo">
              <div className="real-image-container funding-image-container">
                <img 
                  src="/src/assets/erasmus/republica-portuguesa.svg" 
                  alt="República Portuguesa" 
                  className="real-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="text-align: center; padding: 1rem; color: #006600;">
                        <div style="font-size: 0.9rem; font-weight: bold;">REPÚBLICA</div>
                        <div style="font-size: 0.9rem; font-weight: bold; margin: 0.3rem 0;">PORTUGUESA</div>
                        <div style="font-size: 0.7rem; color: #666;">Ensino Profissional</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="funding-label">
            Erasmus+ é o programa da UE para a educação, formação, juventude e desporto
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErasmusPage;
