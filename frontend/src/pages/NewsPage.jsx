import React, { useState, useEffect } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // CORREÇÃO: Nova URL base
  const STRAPI_BASE_URL = "https://strapi-definitivo.onrender.com";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      
      // CORREÇÃO: Endpoint correto no plural
      const response = await fetch(`${STRAPI_BASE_URL}/api/noticias?populate=*&sort=createdAt:desc`);
      
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Processar dados do Strapi v4
      if (data.data) {
        const formattedNews = data.data.map(item => {
          const attributes = item.attributes || {};
          
          // Extrair URL da imagem
          let imageUrl = null;
          if (attributes.imagem?.data?.attributes?.url) {
            imageUrl = `${STRAPI_BASE_URL}${attributes.imagem.data.attributes.url}`;
          }
          
          return {
            id: item.id,
            title: attributes.titulo || attributes.title || "Sem título",
            date: attributes.data_publicacao || attributes.createdAt,
            excerpt: attributes.conteudo ? 
              (typeof attributes.conteudo === 'string' ? 
                attributes.conteudo.substring(0, 200) + '...' : 
                'Conteúdo disponível') : 
              'Sem descrição',
            image: imageUrl ? { url: imageUrl } : null,
            published: true
          };
        });
        
        setNewsData(formattedNews);
      } else {
        setNewsData([]);
      }
      
    } catch (err) {
      console.error('Erro ao carregar notícias:', err);
      setNewsData([]);
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
      return 'Data não disponível';
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
              📊 {newsData.length} notícia{newsData.length !== 1 ? 's' : ''}
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
              🔄 Atualizar
            </button>
          </div>
        )}
      </div>

      {/* LISTA DE NOTÍCIAS */}
      {newsData.length === 0 ? (
        <div style={{textAlign: 'center', padding: '60px', color: '#95a5a6'}}>
          <h3>Nenhuma notícia no momento</h3>
          <p>Em breve teremos novidades para partilhar.</p>
          <p style={{marginTop: '10px', fontSize: '14px'}}>
            <a 
              href={`${STRAPI_BASE_URL}/admin`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: '#3498db'}}
            >
              Acessar painel administrativo
            </a>
          </p>
        </div>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px'}}>
          {newsData.map(item => (
            <div 
              key={item.id} 
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                border: '1px solid #ecf0f1',
                cursor: 'pointer'
              }}
              onClick={() => window.location.href = `/noticias/${item.id}`}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* IMAGEM */}
              {item.image && item.image.url && (
                <div style={{height: '200px', overflow: 'hidden'}}>
                  <img 
                    src={item.image.url} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
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