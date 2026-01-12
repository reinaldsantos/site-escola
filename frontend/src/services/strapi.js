import axios from 'axios';

const API_URL = 'http://localhost:1338/api';
const STRAPI_URL = 'http://localhost:1338';

const strapiApi = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

const newsService = {
  async getAllNews() {
    try {
      const response = await strapiApi.get('/noticias?populate=*&sort=createdAt:desc');
      
      if (response.data && response.data.data) {
        return this.formatNews(response.data.data);
      }
      return [];
      
    } catch (error) {
      console.error('Erro ao buscar notícias');
      return [];
    }
  },

  formatNews(newsData) {
    return newsData.map(item => {
      // Extrai texto do Rich Text
      let contentText = '';
      if (item.conteudo && Array.isArray(item.conteudo)) {
        item.conteudo.forEach(block => {
          if (block.children && Array.isArray(block.children)) {
            block.children.forEach(child => {
              if (child.text) contentText += child.text + ' ';
            });
          }
        });
      }
      
      // Imagem
      let imageData = null;
      if (item.image && item.image.url) {
        imageData = {
          url: `${STRAPI_URL}${item.image.url}`,
          alt: item.image.alternativeText || item.titulo || 'Imagem da notícia'
        };
      }
      
      return {
        id: item.id,
        title: item.titulo || 'Notícia EPF',
        content: contentText.trim(),
        excerpt: this.createExcerpt(contentText, 120),
        date: item.data_publicacao || item.createdAt,
        published: item.publicado === true,
        image: imageData,
        category: 'Notícia'
      };
    });
  },

  createExcerpt(text, maxLength) {
    if (!text || text.trim() === '') return 'Leia a notícia completa para mais detalhes.';
    const cleanText = text.trim();
    return cleanText.length > maxLength 
      ? cleanText.substring(0, maxLength) + '...' 
      : cleanText;
  }
};

export default newsService;
