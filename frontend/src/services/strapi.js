import axios from 'axios';

const API_URL = 'http://localhost:1338/api';
const STRAPI_URL = 'http://localhost:1338';

const strapiApi = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const newsService = {
  async getAllNews() {
    try {
      console.log('🔄 Buscando notícias do Strapi...');
      const response = await strapiApi.get('/noticias?populate=*&sort=createdAt:desc');
      
      console.log('✅ API respondeu com sucesso');
      
      if (response.data && response.data.data) {
        console.log(`📊 Encontradas ${response.data.data.length} notícias`);
        const news = this.formatNews(response.data.data);
        return news;
      }
      return [];
      
    } catch (error) {
      console.error('❌ Erro ao buscar notícias:', error.message);
      return [];
    }
  },

  formatNews(newsData) {
    return newsData.map(item => {
      // SEUS DADOS ESTÃO DIRETAMENTE NO ITEM!
      // A API retorna: {id: 2, titulo: "...", conteudo: [...], ...}
      
      console.log('🔍 Processando notícia:', item);
      
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
          alt: item.image.alternativeText || item.titulo
        };
      }
      
      return {
        id: item.id,
        title: item.titulo || 'Sem título',
        content: contentText.trim(),
        excerpt: this.createExcerpt(contentText, 150),
        date: item.data_publicacao || item.createdAt,
        published: item.publicado === true,
        image: imageData,
        category: 'Notícia'
      };
    });
  },

  createExcerpt(text, maxLength) {
    if (!text || text.trim() === '') return 'Sem conteúdo disponível...';
    const cleanText = text.trim();
    return cleanText.length > maxLength 
      ? cleanText.substring(0, maxLength) + '...' 
      : cleanText;
  }
};

export default newsService;
