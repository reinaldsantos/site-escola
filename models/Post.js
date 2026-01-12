// models/Post.js
const posts = [
  {
    id: 1,
    title: 'Bem-vindo ao Blog da Escola',
    slug: 'bem-vindo-ao-blog-da-escola',
    content: '<h1>Bem-vindo!</h1><p>Este é o blog oficial da nossa escola.</p>',
    excerpt: 'Primeira publicação do blog escolar',
    author: 'Direção',
    category: 'Geral',
    tags: ['escola', 'blog', 'boas-vindas'],
    publishedAt: '2024-01-08',
    featured: true
  },
  {
    id: 2,
    title: 'Calendário Escolar 2024',
    slug: 'calendario-escolar-2024',
    content: '<h1>Calendário 2024</h1><p>Datas importantes do ano letivo...</p>',
    excerpt: 'Confira as datas importantes do ano letivo',
    author: 'Secretaria',
    category: 'Informações',
    tags: ['calendário', 'datas', 'escolar'],
    publishedAt: '2024-01-08',
    featured: true
  }
];

export default posts;
