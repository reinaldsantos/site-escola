import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsFromStrapi();
  }, []);

  // FUNÇÃO CORRIGIDA - Seu Strapi retorna dados DIRETOS
  const fetchNewsFromStrapi = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/noticias', {
        params: {
          'populate': '*',
          'sort': 'data_publicacao:desc',
          'pagination[pageSize]': 3,
          'filters[publicado][$eq]': true
        }
      });
      
      console.log('✅ CONEXÃO COM STRAPI ESTABELECIDA!');
      console.log('📰 Dados recebidos:', response.data.data);
      console.log('🔍 Estrutura da primeira notícia:', response.data.data[0]);
      
      setNews(response.data.data);
    } catch (error) {
      console.error('❌ Erro ao buscar notícias do Strapi:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
    } finally {
      setLoading(false);
    }
  };

  // FUNÇÃO PARA IMAGENS (seu Strapi não tem imagens ainda)
  const getStrapiImageUrl = (imageField) => {
    // Use placeholders temporários
    const placeholders = [
      "https://www.epfundao.edu.pt/web/image/177725",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  };

  // FUNÇÃO PARA CONVERTER RICH TEXT DO STRAPI
  const getPlainText = (richTextData) => {
    if (!richTextData) return 'Clique para ler mais...';
    
    // Se for array do Strapi (Rich Text)
    if (Array.isArray(richTextData)) {
      // Extrai texto dos children
      const text = richTextData
        .map(item => {
          if (item.children && Array.isArray(item.children)) {
            return item.children.map(child => child.text || '').join(' ');
          }
          return '';
        })
        .join(' ');
      
      return text.substring(0, 120) + (text.length > 120 ? '...' : '');
    }
    
    // Se já for string
    if (typeof richTextData === 'string') {
      return richTextData.substring(0, 120) + '...';
    }
    
    return 'Leia a notícia completa...';
  };

  // FUNÇÃO PARA FORMATAR DATA
  const formatStrapiDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // FUNÇÃO PARA ÍCONES
  const getCategoryIcon = (category) => {
    const icons = {
      'Inscrições': '🎓',
      'Cursos': '📚',
      'Eventos': '📅',
      'Notícias': '📰',
      'Anúncio': '📢',
      'Geral': '🏫',
      'Aviso': '⚠️',
      'Resultado': '🏆'
    };
    
    const defaultIcons = ['🌟', '✨', '💡', '🚀', '🎯', '✅'];
    return icons[category] || defaultIcons[Math.floor(Math.random() * defaultIcons.length)];
  };

  // LOADING STATE
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando notícias do Strapi...</p>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Inscrições 25/26</h1>
          <p>
            Com uma experiência de trinta anos de formação e com elevados índices de empregabilidade!
          </p>
          <p>
            Temos ofertas formativas com garantia de um futuro de sucesso!
          </p>
          <Link to="/cursos" className="btn btn-primary btn-large">
            Inscreve-te
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Porque Escolher a EPF Fundão</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2454/2454273.png" 
                  alt="Experiência"
                  className="feature-img"
                />
              </div>
              <h3>30+ Anos de Experiência</h3>
              <p>Três décadas formando profissionais qualificados</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135753.png" 
                  alt="Competência"
                  className="feature-img"
                />
              </div>
              <h3>Formação Reconhecida</h3>
              <p>Cursos certificados com qualidade comprovada</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" 
                  alt="Empregabilidade"
                  className="feature-img"
                />
              </div>
              <h3>Alta Empregabilidade</h3>
              <p>90% dos nossos alunos estão empregados</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2454/2454286.png" 
                  alt="Inovação"
                  className="feature-img"
                />
              </div>
              <h3>Tecnologia Moderna</h3>
              <p>Laboratórios equipados com tecnologia de ponta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Inscrições */}
      <section className="inscricoes-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <h2>🎓 <span className="highlight">Inscrições Abertas</span> para 2025/2026</h2>
              <p className="banner-description">
                Não perca esta oportunidade! Inscreva-se nos cursos profissionais 
                da Escola Profissional do Fundão e garanta um futuro de sucesso.
              </p>
              <div className="banner-buttons">
                <Link to="/cursos" className="btn btn-primary">
                  Ver Cursos Disponíveis
                </Link>
                <Link to="/inscricao" className="btn btn-accent">
                  Inscrever-se Agora
                </Link>
              </div>
            </div>
            <div className="banner-image">
              <img 
                src="https://www.epfundao.edu.pt/web/image/176900" 
                alt="Estudantes da EPF Fundão" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWS SECTION CONECTADA AO STRAPI ========== */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">
            📰 Últimas Notícias do Strapi
            <span className="strapi-badge">Conectado</span>
          </h2>
          
          {/* DEBUG INFO (pode remover depois) */}
          <div className="debug-info" style={{
            background: '#e3f2fd',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            <strong>🔗 Ultimas :</strong> {news.length} notícia(s) carregada(s)
          </div>
          
          {news.length === 0 ? (
            <div className="no-news-message">
              <div style={{textAlign: 'center', padding: '40px'}}>
                <div style={{fontSize: '48px', marginBottom: '20px'}}>📭</div>
                <h3>Nenhuma notícia publicada ainda</h3>
                <p>Adicione notícias no painel do Strapi em:</p>
                <p>
                  <a href="http://localhost:1337/admin" target="_blank" rel="noopener noreferrer">
                    http://localhost:1337/admin
                  </a>
                </p>
                <p style={{marginTop: '20px', fontSize: '14px', color: '#666'}}>
                  Login: epfundaosite@gmail.com | Senha: JorgeGamboa!
                </p>
              </div>
            </div>
          ) : (
            <div className="news-grid">
              {news.map((item) => (
                <article key={item.id} className="news-card">
                  {/* IMAGEM */}
                  <div className="news-image-container">
                    <img 
                      src={getStrapiImageUrl(item.imagem)}
                      alt={item.titulo || 'Notícia EPF'}
                      className="news-image"
                    />
                    
                    <div className="image-overlay"></div>
                    
                    {/* BADGE DA CATEGORIA COM ÍCONE */}
                    <span className="news-category-badge">
                      {getCategoryIcon(item.categoria)} {item.categoria || 'Geral'}
                    </span>
                    
                    {/* DATA FORMATADA */}
                    {item.data_publicacao && (
                      <div className="news-date">
                        <span>{formatStrapiDate(item.data_publicacao)}</span>
                      </div>
                    )}
                  </div>

                  {/* CONTEÚDO */}
                  <div className="news-content">
                    <h3 className="news-title">
                      {item.titulo || 'Sem título'}
                    </h3>
                    
                    <p className="news-excerpt">
                      {getPlainText(item.conteudo)}
                    </p>
                    
                    <div className="news-meta">
                      <span className="meta-item">
                        📅 {formatStrapiDate(item.data_publicacao || item.publishedAt)}
                      </span>
                      <span className="meta-item">
                        {item.publicado ? '✅ Publicado' : '⏳ Rascunho'}
                      </span>
                    </div>
                    
                    <div className="news-footer">
                      <Link to={`/noticia/${item.id}`} className="read-more-btn">
                        <span>Ler notícia completa</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {/* BOTÃO VER TODAS */}
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/noticias" className="btn btn-secondary">
              <span>Ver todas as notícias ({news.length})</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Novos Cursos */}
      <section className="novos-cursos">
        <div className="container">
          <h2 className="section-title">Novos Cursos 2025/2026</h2>
          <div className="cursos-grid">
            
            <div className="curso-card">
              <div className="curso-image">
                <img 
                  src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Curso de Programação"
                />
                <span className="curso-tag">NOVO</span>
              </div>
              <div className="curso-content">
                <h3>Técnico de Programação Web</h3>
                <p>Desenvolvimento front-end e back-end com tecnologias modernas</p>
                <div className="curso-info">
                  <span>⏱️ 3 Anos</span>
                  <span>👥 25 Vagas</span>
                </div>
                <Link to="/cursos/programacao" className="btn-curso">
                  Saber Mais
                </Link>
              </div>
            </div>
            
            <div className="curso-card">
              <div className="curso-image">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Curso de Energias Renováveis"
                />
                <span className="curso-tag">NOVO</span>
              </div>
              <div className="curso-content">
                <h3>Energias Renováveis</h3>
                <p>Instalação e manutenção de sistemas solares e eólicos</p>
                <div className="curso-info">
                  <span>⏱️ 2 Anos</span>
                  <span>👥 20 Vagas</span>
                </div>
                <Link to="/cursos/energias" className="btn-curso">
                  Saber Mais
                </Link>
              </div>
            </div>
            
            <div className="curso-card">
              <div className="curso-image">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Curso de Mecatrônica"
                />
                <span className="curso-tag">NOVO</span>
              </div>
              <div className="curso-content">
                <h3>Mecatrônica Automóvel</h3>
                <p>Especialização em veículos elétricos e sistemas automotivos</p>
                <div className="curso-info">
                  <span>⏱️ 3 Anos</span>
                  <span>👥 30 Vagas</span>
                </div>
                <Link to="/cursos/mecatronica" className="btn-curso">
                  Saber Mais
                </Link>
              </div>
            </div>
            
          </div>
          
          <div className="text-center mt-4">
            <Link to="/cursos" className="btn btn-secondary">
              Ver Todos os Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens da Escola */}
      <section className="school-gallery">
        <div className="container">
          <h2 className="section-title">🏫 Conheça Nossa Escola</h2>
          <div className="gallery-grid">
            <div className="gallery-item main-item">
              <img 
                src="https://www.epfundao.edu.pt/web/image/177725" 
                alt="Vista da Escola Profissional do Fundão"
              />
              <div className="gallery-caption">Nossa Escola</div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Laboratórios EPF"
              />
              <div className="gallery-caption">Laboratórios</div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Atividades Práticas"
              />
              <div className="gallery-caption">Atividades Práticas</div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Biblioteca"
              />
              <div className="gallery-caption">Biblioteca</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;