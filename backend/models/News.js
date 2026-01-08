// Mock database - em produção, usar MongoDB, PostgreSQL, etc.
let news = [
  {
    id: 1,
    title: 'Inscrições 25/26 Abertas',
    content: 'Com uma experiência de trinta anos de formação e com elevados índices de empregabilidade! Temos ofertas formativas com garantia de um futuro de sucesso!',
    category: 'inscricoes',
    image: '/images/inscricoes.jpg',
    published: true,
    createdAt: new Date(),
    authorId: 1
  },
  {
    id: 2,
    title: 'Novos Cursos Profissionais',
    content: 'Conheça os nossos novos cursos profissionais com garantia de emprego.',
    category: 'formacao',
    image: '/images/cursos.jpg',
    published: true,
    createdAt: new Date(),
    authorId: 1
  }
];

let newsIdCounter = 3;

export const getAllNews = async (publishedOnly = true) => {
  if (publishedOnly) {
    return news.filter(n => n.published);
  }
  return news;
};

export const getNewsById = async (id) => {
  return news.find(n => n.id === parseInt(id));
};

export const createNews = async (newsData) => {
  const newNews = {
    id: newsIdCounter++,
    ...newsData,
    createdAt: new Date()
  };
  news.push(newNews);
  return newNews;
};

export const updateNews = async (id, newsData) => {
  const index = news.findIndex(n => n.id === parseInt(id));
  if (index === -1) return null;
  
  news[index] = {
    ...news[index],
    ...newsData,
    updatedAt: new Date()
  };
  return news[index];
};

export const deleteNews = async (id) => {
  const index = news.findIndex(n => n.id === parseInt(id));
  if (index === -1) return false;
  
  news.splice(index, 1);
  return true;
};

export default { getAllNews, getNewsById, createNews, updateNews, deleteNews };
