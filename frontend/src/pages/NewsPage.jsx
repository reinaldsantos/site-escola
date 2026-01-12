import React, { useState, useEffect } from 'react';
import './NewsPage.css';
import newsService from '../services/strapi';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const news = await newsService.getAllNews();
      setNewsData(news);
    } catch (err) {
      console.error('Erro ao carregar notícias:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('pt-PT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return '';
    }
  };

  if (loading) {
    return (
      <div style={{textAlign: 'center', padding: '50px'}}>
        <h2>Carregando notícias...</h2>
      </div>
    );
  }

  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
      {/* CABEÇALHO SIMPLES */}
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{color: '#2c3e50', fontSize: '2.5rem'}}>📰 Notícias EPF</h1>
        <h3 style={{
          color: '#3498db',
          fontSize: '1.3rem',
          fontWeight: '400',
          marginTop: '10px',
          marginBottom: '20px'
        }}>
          Fique por dentro das últimas novidades da nossa escola
        </h3>
        
        {newsData.length > 0 && (
          <div style={{
            display: 'inline-flex',
            gap: '15px',
            marginTop: '15px',
            background: '#f8f9fa',
            padding: '10px 20px',
            borderRadius: '25px'
          }}>
            <span style={{color: '#3498db'}}>
              📅 {newsData.length} notícia{newsData.length !== 1 ? 's' : ''}
            </span>
            <button 
              onClick={fetchNews}
              style={{
                background: 'transparent',
                border: '1px solid #3498db',
                color: '#3498db',
                padding: '5px 15px',
                borderRadius: '15px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              🔁 Atualizar
            </button>
          </div>
        )}
      </div>

      {/* LISTA DE NOTÍCIAS */}
      {newsData.length === 0 ? (
        <div style={{textAlign: 'center', padding: '60px', color: '#95a5a6'}}>
          <h3>Nenhuma notícia no momento</h3>
          <p>Em breve teremos novidades para partilhar.</p>
        </div>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px'}}>
          {newsData.map(item => (
            <div key={item.id} style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              border: '1px solid #ecf0f1'
            }}>
              {/* IMAGEM */}
              {item.image && (
                <div style={{height: '200px', overflow: 'hidden'}}>
                  <img 
                    src={item.image.url} 
                    alt={item.image.alt || item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              )}
              
              {/* CONTEÚDO */}
              <div style={{padding: '25px'}}>
                {/* CABEÇALHO COM DATA */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px',
                  fontSize: '14px'
                }}>
                  <span style={{
                    background: '#e3f2fd',
                    color: '#1976d2',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontWeight: '600'
                  }}>
                    Notícia
                  </span>
                  <span style={{color: '#7f8c8d'}}>
                    📅 {formatDate(item.date)}
                  </span>
                </div>
                
                {/* TÍTULO */}
                <h3 style={{
                  margin: '0 0 15px 0',
                  color: '#2c3e50',
                  fontSize: '1.4rem',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>
                
                {/* RESUMO */}
                <p style={{
                  color: '#546e7a',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '15px'
                }}>
                  {item.excerpt}
                </p>
                
                {/* RODAPÉ */}
                <div style={{
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '13px',
                    color: item.published ? '#27ae60' : '#f39c12',
                    fontWeight: '500'
                  }}>
                    {item.published ? '✅ Publicada' : '⏳ Em breve'}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    color: '#bdc3c7',
                    fontStyle: 'italic'
                  }}>
                    EPF Escola
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* RODAPÉ DISCRETO */}
      <div style={{
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid #ecf0f1',
        textAlign: 'center',
        fontSize: '13px',
        color: '#95a5a6'
      }}>
        <p>
          © {new Date().getFullYear()} EPF - Escola Profissional. 
          Todas as notícias são atualizadas regularmente.
        </p>
      </div>
    </div>
  );
};

export default NewsPage;
