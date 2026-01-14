// CONFIG.JS INTELIGENTE - USA NGROK QUANDO ESTÁ REMOTO
const getConfig = () => {
  // Detecta se está acessando via ngrok
  const isNgrok = window.location.hostname.includes('ngrok-free.dev');
  
  return {
    // 🔥 MUDA AUTOMATICAMENTE
    API_URL: isNgrok 
      ? 'https://unifoliolate-vigorless-tamekia.ngrok-free.dev/api'
      : 'http://localhost:1338/api',
    
    BASE_URL: isNgrok 
      ? 'https://unifoliolate-vigorless-tamekia.ngrok-free.dev'
      : 'http://localhost:1338',

    // ========== MÉTODO PRINCIPAL ==========
    buscar: async (colecao, limite = 10) => {
      const config = getConfig();
      console.log(`📦 Buscando "${colecao}" de ${config.API_URL}`);

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
        console.error(`❌ Erro ao buscar ${colecao}:`, erro);
        return [];
      }
    },

    // ========== PROCESSAR IMAGENS ==========
    getImagemUrl: (imagem) => {
      const config = getConfig();
      if (!imagem) return '';
      
      // Se for formato Strapi v5
      if (imagem.data && imagem.data.attributes) {
        return `${config.BASE_URL}${imagem.data.attributes.url}`;
      }
      
      // Se for formato antigo
      if (imagem.formats && imagem.formats.medium) {
        return `${config.BASE_URL}${imagem.formats.medium.url}`;
      }
      
      if (imagem.url) {
        return `${config.BASE_URL}${imagem.url}`;
      }
      
      return '';
    },

    // ========== EXTRAIR TEXTO DE RICH TEXT ==========
    extrairTexto: (conteudo, maxCaracteres = 100) => {
      if (!conteudo) return '';
      
      // Se for array (rich text do Strapi)
      if (Array.isArray(conteudo)) {
        const textoPlano = conteudo
          .filter(bloco => bloco.type === 'paragraph')
          .map(bloco => bloco.children.map(child => child.text).join(' '))
          .join(' ');
        
        return textoPlano.length > maxCaracteres 
          ? textoPlano.substring(0, maxCaracteres) + '...' 
          : textoPlano;
      }
      
      // Se for string normal
      if (typeof conteudo === 'string') {
        return conteudo.length > maxCaracteres 
          ? conteudo.substring(0, maxCaracteres) + '...' 
          : conteudo;
      }
      
      return '';
    }
  };
};

// Exporta função para sempre ter configuração atualizada
export default getConfig;
