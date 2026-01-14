// Teste da API do Strapi para verificar estrutura das imagens
async function testStrapiImages() {
  try {
    // Testar endpoint de notícias
    const response = await fetch('http://localhost:1338/api/noticias?populate=*');
    const data = await response.json();
    
    console.log('📊 ESTRUTURA DA API:');
    console.log('Total de itens:', data.data?.length || 0);
    
    if (data.data && data.data.length > 0) {
      const firstItem = data.data[0];
      console.log('Primeiro item:', firstItem.attributes.titulo);
      
      // Verificar se tem imagem
      if (firstItem.attributes.imagem) {
        console.log('✅ Tem imagem!');
        console.log('Caminho da imagem:', firstItem.attributes.imagem.data?.attributes?.url);
        console.log('Formato completo:', firstItem.attributes.imagem);
      } else {
        console.log('❌ Sem imagem no atributo "imagem"');
        
        // Verificar outros atributos possíveis
        console.log('Atributos disponíveis:', Object.keys(firstItem.attributes));
      }
    }
  } catch (error) {
    console.error('❌ Erro ao testar API:', error);
  }
}

// Executar teste se estiver no navegador
if (typeof window !== 'undefined') {
  testStrapiImages();
}

