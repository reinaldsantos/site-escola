import { useEffect, useState } from 'react';
import api from '../config/axios';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await api.get('/news');
      setNews(response.data);
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main>
        <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
          <p>Carregando notícias...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Notícias</h1>
          <p>Fique a par das últimas novidades da escola</p>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          <div className="news-list">
            {news.map(item => (
              <article key={item.id} className="news-item">
                {item.image && (
                  <div className="news-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <div className="news-item-content">
                  <span className="news-category">{item.category}</span>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <div className="news-meta">
                    <span>{new Date(item.createdAt).toLocaleDateString('pt-PT')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {news.length === 0 && (
            <div className="no-news">
              <p>Nenhuma notícia disponível no momento.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default News;
