import { useEffect, useState } from "react";
import { newsService } from "../services/strapi";

function NewsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("?? Iniciando busca de notícias...");
      
      const newsData = await newsService.getAllNews();
      console.log("?? Dados recebidos:", newsData);
      
      setPosts(newsData);
    } catch (err) {
      console.error("? Erro completo:", err);
      setError("Erro: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{padding: '20px', textAlign: 'center'}}>
        <h3>Carregando notícias...</h3>
        <p>Conectando ao Strapi: http://site-escola-65zi.onrender.com/api/noticias</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{padding: '20px', background: '#ffebee', border: '1px solid #ffcdd2'}}>
        <h3>Erro de Conexão</h3>
        <p>{error}</p>
        <button onClick={fetchNews}>Tentar Novamente</button>
      </div>
    );
  }

  return (
    <div style={{padding: '20px'}}>
      <h2>Notícias da Escola</h2>
      <button onClick={fetchNews} style={{marginBottom: '20px'}}>Atualizar</button>
      
      {posts.length === 0 ? (
        <p>Nenhuma notícia encontrada.</p>
      ) : (
        <div>
          <p><strong>Total de notícias:</strong> {posts.length}</p>
          {posts.map(post => (
            <div key={post.id} style={{
              border: '1px solid #ccc',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '5px'
            }}>
              <h3>{post.title}</h3>
              <p>{post.content || "Sem conteúdo"}</p>
              <small>
                Data: {new Date(post.date).toLocaleDateString('pt-BR')} | 
                Status: {post.published ? 'Publicado' : 'Rascunho'}
              </small>
              {post.image && (
                <div>
                  <img src={post.image.url} alt={post.image.alt} style={{maxWidth: '200px'}} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      <div style={{marginTop: '30px', padding: '15px', background: '#f5f5f5'}}>
        <h4>Debug Info:</h4>
        <p>API URL: http://site-escola-65zi.onrender.com/api/noticias</p>
        <p>Frontend: http://localhost:3000</p>
        <button onClick={() => {
          console.log("Posts no estado:", posts);
          console.log("Testando API...");
          fetch("http://site-escola-65zi.onrender.com/api/noticias")
            .then(res => res.json())
            .then(data => console.log("Resposta API:", data))
            .catch(err => console.error("Erro API:", err));
        }}>
          Testar Conexão
        </button>
      </div>
    </div>
  );
}

export default NewsList;

