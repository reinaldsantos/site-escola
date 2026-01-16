// src/hooks/debugStrapi.js
const debugStrapi = async (collectionName) => {
  console.log(`?? DEBUG: Verificando coleção ${collectionName}`);
  
  const apiUrl = `http://site-escola-65zi.onrender.com/api/${collectionName}?populate=*`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log(`?? Estrutura completa:`, data);
    
    if (data.data && data.data.length > 0) {
      const primeiroItem = data.data[0];
      console.log(`?? Primeiro item completo:`, primeiroItem);
      console.log(`??? Atributos disponíveis:`, Object.keys(primeiroItem.attributes || primeiroItem));
      
      // Verificar campos específicos
      const attrs = primeiroItem.attributes || primeiroItem;
      console.log(`?? Título:`, attrs.titulo || attrs.title || attrs.nome);
      console.log(`?? Conteúdo:`, attrs.conteudo || attrs.content || attrs.descricao);
      console.log(`??? Imagem:`, attrs.imagem || attrs.image);
      console.log(`?? Data:`, attrs.createdAt || attrs.data);
    }
  } catch (error) {
    console.error(`? Erro no debug:`, error);
  }
};

// Testar todas as coleções
debugStrapi('noticias');
debugStrapi('eventos');
debugStrapi('cursos');


