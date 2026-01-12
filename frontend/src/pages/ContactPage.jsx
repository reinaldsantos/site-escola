// src/pages/ContactPage.jsx - VERSÃO CORRIGIDA
const ContactPage = () => {
  return (
    <div style={{
      minHeight: '80vh',
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Cabeçalho */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            color: '#003319',
            fontSize: '2.8rem',
            marginBottom: '1rem'
          }}>
            ✉️ Entre em Contato
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Estamos aqui para ajudar. Entre em contacto connosco através dos seguintes meios.
          </p>
        </div>
        
        {/* Informações de Contacto */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: '#003319'
            }}>
              📍
            </div>
            <h3 style={{ color: '#003319', marginBottom: '1rem' }}>
              Morada
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Rua da Escola, 123<br />
              1234-567 Lisboa<br />
              Portugal
            </p>
          </div>
          
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: '#003319'
            }}>
              📞
            </div>
            <h3 style={{ color: '#003319', marginBottom: '1rem' }}>
              Telefone
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              +351 123 456 789<br />
              Segunda a Sexta: 9h-18h
            </p>
          </div>
          
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: '#003319'
            }}>
              ✉️
            </div>
            <h3 style={{ color: '#003319', marginBottom: '1rem' }}>
              Email
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              info@escola.edu.pt<br />
              geral@escola.edu.pt
            </p>
          </div>
        </div>
        
        {/* Mapa */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          marginBottom: '3rem'
        }}>
          <h3 style={{ color: '#003319', marginBottom: '1rem', textAlign: 'center' }}>
            📍 Localização
          </h3>
          <div style={{
            height: '400px',
            background: '#e9ecef',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            [Mapa da localização da escola]
          </div>
        </div>
        
        {/* Horário */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#003319', marginBottom: '1rem' }}>
            🕒 Horário de Funcionamento
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <h4 style={{ color: '#003319', marginBottom: '0.5rem' }}>Secretaria</h4>
              <p style={{ color: '#666' }}>Segunda a Sexta<br />9:00 - 18:00</p>
            </div>
            <div>
              <h4 style={{ color: '#003319', marginBottom: '0.5rem' }}>Apoio ao Aluno</h4>
              <p style={{ color: '#666' }}>Segunda a Sexta<br />10:00 - 17:00</p>
            </div>
            <div>
              <h4 style={{ color: '#003319', marginBottom: '0.5rem' }}>Biblioteca</h4>
              <p style={{ color: '#666' }}>Segunda a Sexta<br />8:30 - 19:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
