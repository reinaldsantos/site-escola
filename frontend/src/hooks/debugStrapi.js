// src/hooks/debugStrapi.js
const debugStrapi = async (collectionName) => {
  console.log(`🔍 DEBUG: Verificando coleção ${collectionName} no NOVO servidor`);
  
  // CORREÇÃO: URL atualizada para o novo servidor
  const BASE_URL = 'https://strapi-definitivo.onrender.com';
  
  // Verificar se o nome da coleção está no plural
  // Mapa de conversão singular -> plural
  const pluralMap = {
    'noticia': 'noticias',
    'evento': 'eventos',
    'aviso': 'avisos',
    'curso': 'cursos'
  };
  
  // Converter para plural se necessário
  const colecaoPlural = pluralMap[collectionName] || collectionName;
  
  const apiUrl = `${BASE_URL}/api/${colecaoPlural}?populate=*`;
  
  console.log(`🌐 URL sendo testada: ${apiUrl}`);
  
  try {
    const response = await fetch(apiUrl);
    
    console.log(`📊 Status da resposta: ${response.status} - ${response.statusText}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        console.error(`❌ ENDPOINT NÃO ENCONTRADO (404)`);
        console.error(`   Verifique se a coleção "${colecaoPlural}" existe no Strapi Admin:`);
        console.error(`   ${BASE_URL}/admin`);
        
        // Sugerir teste de endpoint plural vs singular
        console.log(`   Testando alternativas...`);
        if (colecaoPlural.endsWith('s')) {
          const singular = colecaoPlural.slice(0, -1);
          console.log(`   Tentando singular: /api/${singular}`);
        }
      } else if (response.status === 503) {
        console.error(`🚫 SERVIDOR INDISPONÍVEL (503)`);
        console.error(`   O servidor pode estar em processo de inicialização ou offline`);
      }
      return;
    }
    
    const data = await response.json();
    
    console.log(`✅ Estrutura completa:`, data);
    
    // Verificar estrutura da resposta
    if (data.data) {
      console.log(`📦 Total de itens: ${data.data.length}`);
      
      if (data.data.length > 0) {
        const primeiroItem = data.data[0];
        console.log(`🎯 Primeiro item completo:`, primeiroItem);
        
        // Verificar atributos disponíveis
        const attrs = primeiroItem.attributes || primeiroItem;
        console.log(`🗂️  Atributos disponíveis (${Object.keys(attrs).length}):`, Object.keys(attrs));
        
        // Verificar campos específicos
        console.log(`📝 CAMPOS ESPECÍFICOS:`);
        console.log(`   • Título:`, attrs.titulo || attrs.title || attrs.nome || 'NÃO ENCONTRADO');
        console.log(`   • Conteúdo:`, attrs.conteudo || attrs.content || attrs.descricao ? 'EXISTE' : 'NÃO ENCONTRADO');
        console.log(`   • Imagem:`, attrs.imagem ? 'EXISTE' : attrs.image ? 'EXISTE (campo "image")' : 'NÃO ENCONTRADO');
        console.log(`   • Data:`, attrs.createdAt || attrs.data_publicacao || attrs.data || 'NÃO ENCONTRADO');
        
        // Verificar estrutura da imagem
        if (attrs.imagem) {
          console.log(`   📸 Estrutura da imagem:`, attrs.imagem);
          if (attrs.imagem.data && attrs.imagem.data.attributes) {
            console.log(`   🔗 URL da imagem: ${BASE_URL}${attrs.imagem.data.attributes.url}`);
          }
        }
        
        // Verificar campos personalizados por tipo
        if (collectionName.includes('evento')) {
          console.log(`   🏛️  Local:`, attrs.local || 'NÃO ENCONTRADO');
          console.log(`   ⏰ Horário:`, attrs.horario || attrs.hora || 'NÃO ENCONTRADO');
        }
        
      } else {
        console.warn(`⚠️  Coleção "${colecaoPlural}" existe mas está VAZIA`);
        console.log(`   Publique conteúdo em: ${BASE_URL}/admin`);
      }
    } else {
      console.warn(`⚠️  Resposta sem estrutura "data":`, data);
    }
    
  } catch (error) {
    console.error(`💥 Erro no debug:`, error);
    console.error(`   Tipo de erro: ${error.name}`);
    console.error(`   Mensagem: ${error.message}`);
    
    if (error.message.includes('Failed to fetch')) {
      console.error(`   ⚠️  Problema de rede/CORS. Verifique:`);
      console.error(`      1. O servidor está online?`);
      console.error(`      2. Há problemas de CORS?`);
      console.error(`      3. O endpoint existe?`);
    }
  }
};

// Função para testar todas as coleções de uma vez
const testarTodasColecoes = async () => {
  console.log('='.repeat(60));
  console.log('🚀 INICIANDO TESTE COMPLETO DO STRAPI');
  console.log('='.repeat(60));
  
  const colecoes = ['noticias', 'eventos', 'cursos', 'avisos'];
  
  for (const colecao of colecoes) {
    console.log('\n' + '─'.repeat(60));
    console.log(`📚 TESTANDO: ${colecao.toUpperCase()}`);
    console.log('─'.repeat(60));
    await debugStrapi(colecao);
    await new Promise(resolve => setTimeout(resolve, 500)); // Pequeno delay
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('🏁 TESTE CONCLUÍDO');
  console.log('='.repeat(60));
};

// Executar teste completo
// testarTodasColecoes();

// Ou testar coleções individualmente
// debugStrapi('noticias');
// debugStrapi('eventos');
// debugStrapi('cursos');
// debugStrapi('avisos');

export { debugStrapi, testarTodasColecoes };