// CONFIG.JS SIMPLIFICADO - USA SEMPRE PROXY LOCAL
const getConfig = () => {
  return {
    // ?? SEMPRE usa proxy do React (localhost:3000/api ? site-escola-65zi.onrender.com/api)
    API_URL: '/api',
    BASE_URL: '',

    // ========== MÉTODO PRINCIPAL ==========
    buscar: async (colecao, limite = 10) => {
      const config = getConfig();
      console.log(`?? Buscando "${colecao}" de ${config.API_URL}`);

      try {
        const resposta = await fetch(
          `${config.API_URL}/${colecao}?populate=*&sort=createdAt:desc`
        );

        if (!resposta.ok) {
          throw new Error(`API error: ${resposta.status}`);
        }

        const dados = await resposta.json();
        
        // Formata dados do Strapi v5
        if (dados.data && Array.isArray(dados.data)) {
          return dados.data.map(item => ({
            id: item.id,
            ...item.attributes
          }));
        }
        
        return dados;
      } catch (erro) {
        console.error(`? Erro ao buscar ${colecao}:`, erro);
        return [];
      }
    },

    // ========== PROCESSAR IMAGENS ==========
    getImagemUrl: (imagem) => {
      const config = getConfig();
      if (!imagem) return '';
      
      if (imagem.data && imagem.data.attributes) {
        return `${config.BASE_URL}${imagem.data.attributes.url}`;
      }
      
      if (imagem.formats && imagem.formats.medium) {
        return `${config.BASE_URL}${imagem.formats.medium.url}`;
      }
      
      if (imagem.url) {
        return `${config.BASE_URL}${imagem.url}`;
      }
      
      return '';
    },

    // ========== EXTRAIR TEXTO ==========
    extrairTexto: (conteudo, maxCaracteres = 100) => {
      if (!conteudo) return '';
      
      if (Array.isArray(conteudo)) {
        const textoPlano = conteudo
          .filter(bloco => bloco.type === 'paragraph')
          .map(bloco => bloco.children.map(child => child.text).join(' '))
          .join(' ');
        
        return textoPlano.length > maxCaracteres 
          ? textoPlano.substring(0, maxCaracteres) + '...' 
          : textoPlano;
      }
      
      if (typeof conteudo === 'string') {
        return conteudo.length > maxCaracteres 
          ? conteudo.substring(0, maxCaracteres) + '...' 
          : conteudo;
      }
      
      return '';
    }
  };
};

export default getConfig;

