// src/pages/News/NoticiaDetalhe.jsx - VERSÃO CORRIGIDA
import { useParams } from 'react-router-dom';

const NoticiaDetalhe = () => {
  const { slug } = useParams();
  
  // Dados de exemplo
  const noticias = [
    {
      slug: "inscricoes-2025-2026-abertas",
      title: "Inscrições 2025/2026 Abertas",
      date: "15 de Janeiro, 2025",
      author: "Secretaria",
      image: "📋",
      fullContent: `
        <h2>Inscrições Abertas para o Ano Letivo 2025/2026</h2>
        <p>O processo de candidatura para novos alunos já se encontra disponível online através do nosso portal.</p>
        <h3>Prazos Importantes</h3>
        <ul>
          <li>1ª Fase: Até 31 de Março</li>
          <li>2ª Fase: 1 de Abril a 30 de Junho</li>
          <li>3ª Fase: 1 de Julho a 31 de Agosto</li>
        </ul>
        <h3>Documentos Necessários</h3>
        <ul>
          <li>Cartão de Cidadão ou Bilhete de Identidade</li>
          <li>Certificado de Habilitações</li>
          <li>Fotografia tipo passe</li>
          <li>Comprovativo de Morada</li>
        </ul>
      `
    },
    {
      slug: "novo-curso-multimedia",
      title: "Novo Curso de Multimédia",
      date: "10 de Janeiro, 2025",
      author: "Direção Pedagógica",
      image: "🎨",
      fullContent: `
        <h2>Lançamento do Novo Curso de Multimédia</h2>
        <p>Estamos orgulhosos em anunciar o lançamento do nosso novo curso técnico de Multimédia.</p>
        <h3>Áreas de Estudo</h3>
        <ul>
          <li>Design Gráfico</li>
          <li>Edição de Vídeo</li>
          <li>Fotografia Digital</li>
          <li>Web Design</li>
          <li>Motion Graphics</li>
        </ul>
        <h3>Duração e Certificação</h3>
        <p>O curso tem duração de 2 anos e confere certificação profissional nível IV.</p>
      `
    }
  ];
  
  const noticia = noticias.find(n => n.slug === slug) || noticias[0];
  
  return (
    <div style={{
      minHeight: '80vh',
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '15px',
        padding: '2.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
      }}>
        
        {/* Cabeçalho da Notícia */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            fontSize: '4rem',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            {noticia.image}
          </div>
          <h1 style={{
            color: '#003319',
            fontSize: '2.2rem',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {noticia.title}
          </h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            color: '#666',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <span>📅 {noticia.date}</span>
            <span>✍️ Por: {noticia.author}</span>
          </div>
        </div>
        
        {/* Conteúdo */}
        <div style={{
          lineHeight: '1.8',
          color: '#333',
          fontSize: '1.1rem'
        }}
          dangerouslySetInnerHTML={{ __html: noticia.fullContent }}
        />
        
        {/* Voltar */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '2px solid #eee',
          textAlign: 'center'
        }}>
          <a 
            href="/noticias" 
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#003319',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 51, 25, 0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ← Voltar às Notícias
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticiaDetalhe;
