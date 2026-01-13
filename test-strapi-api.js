// test-strapi-api.js
// Execute: node test-strapi-api.js

const fetchNoticias = async () => {
    try {
        console.log('?? Testando API do Strapi v5...');
        
        // Teste 1: Listar notícias
        const response = await fetch('http://localhost:1337/api/noticias');
        const data = await response.json();
        
        console.log('? API conectada com sucesso!');
        console.log('?? Total de notícias:', data.meta?.pagination?.total || data.data?.length || 0);
        
        // Teste 2: Listar com populate
        const response2 = await fetch('http://localhost:1337/api/noticias?populate=*');
        const data2 = await response2.json();
        
        if (data2.data && data2.data.length > 0) {
            console.log('?? Última notícia:', data2.data[0].attributes?.titulo || 'Sem título');
        }
        
    } catch (error) {
        console.error('? Erro ao conectar com a API:', error.message);
        console.log('?? Verifique:');
        console.log('   1. Strapi está rodando? (http://localhost:1337)');
        console.log('   2. Permissões públicas estão habilitadas?');
        console.log('   3. URL correta: http://localhost:1337/api/noticias');
    }
};

fetchNoticias();
