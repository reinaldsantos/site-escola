import React from 'react';
import './AlumniPage.css';

const AlumniPage = () => {
  const parceiros = [
    'Microsoft', 'Oracle', 'Cisco', 'IBM',
    'NOS', 'Vodafone', 'MEO', 'EDP',
    'SONAE', 'Continente', 'Lidl', 'Pingo Doce',
    'Bosch', 'SIEMENS', 'Philips', 'Samsung'
  ];

  const testemunhos = [
    {
      nome: 'Maria Silva',
      curso: 'Informática - Sistemas',
      empresa: 'Microsoft Portugal',
      texto: 'A formação na EPF foi fundamental para minha carreira. Hoje sou desenvolvedora senior na Microsoft.'
    },
    {
      nome: 'João Santos',
      curso: 'Eletrónica',
      empresa: 'Bosch Automotive',
      texto: 'Os conhecimentos técnicos adquiridos na EPF permitiram-me destacar-me na indústria automóvel.'
    },
    {
      nome: 'Ana Costa',
      curso: 'Turismo',
      empresa: 'TAP Air Portugal',
      texto: 'A componente prática e os estágios internacionais foram decisivos para meu sucesso profissional.'
    }
  ];

  return (
    <div className="simple-container alumni-page">
      <div className="simple-header">
        <h1>Alumni e Parceiros</h1>
        <p className="header-subtitle">
          Rede de Antigos Alunos e Parcerias Empresariais
        </p>
      </div>

      <div className="simple-content">
        <section className="content-section">
          <h2 className="section-title">Rede de Antigos Alunos</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#37474f', marginBottom: '3rem' }}>
            A rede Alumni da EPF reúne milhares de antigos alunos que hoje se destacam 
            nas mais diversas áreas profissionais, em Portugal e no estrangeiro.
          </p>

          <div className="minimal-grid">
            {testemunhos.map((test, index) => (
              <div key={index} className="minimal-item">
                <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#455a64', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{test.texto}"
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.3rem' }}>
                    {test.nome}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#78909c', marginBottom: '0.2rem' }}>
                    {test.curso}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#90a4ae', fontWeight: '500' }}>
                    {test.empresa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Parceiros Empresariais</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#37474f', marginBottom: '2rem' }}>
            A EPF mantém parcerias estratégicas com empresas líderes de mercado, 
            garantindo a qualidade da formação e a empregabilidade dos seus alunos.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
            gap: '1rem',
            marginTop: '2rem'
          }}>
            {parceiros.map((parceiro, index) => (
              <div key={index} style={{
                padding: '1.5rem 1rem',
                textAlign: 'center',
                background: 'white',
                border: '1px solid #f0f0f0',
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--primary-color)',
                  marginBottom: '0.5rem'
                }}>
                  {parceiro.charAt(0)}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#37474f'
                }}>
                  {parceiro}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlumniPage;
