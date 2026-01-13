// ================================================
// CONFIG.JS UNIVERSAL - VERSÃO CORRIGIDA
// ================================================

const CONFIG_STRAPI = {
    // URL base - NUNCA MUDAR
    API_URL: 'http://localhost:1337/api',
    BASE_URL: 'http://localhost:1337',
    
    // ========== MÉTODO PRINCIPAL ==========
    // Busca QUALQUER coleção automaticamente
    buscar: async (colecao, limite = 10) => {
        console.log(`📦 CONFIG: Buscando "${colecao}" (limite: ${limite})`);
        
        try {
            const resposta = await fetch(
                `${CONFIG_STRAPI.API_URL}/${colecao}?populate=*&sort=createdAt:desc`
            );
            
            if (!resposta.ok) {
                console.warn(`⚠️  Coleção "${colecao}" não encontrada ou sem permissão`);
                return [];
            }
            
            const dados = await resposta.json();
            
            // Formata dados do Strapi v5
            if (dados.data && Array.isArray(dados.data)) {
                return dados.data.slice(0, limite).map(item => ({
                    id: item.id,
                    ...item
                }));
            }
            
            return [];
            
        } catch (erro) {
            console.warn(`⚠️  Erro na coleção "${colecao}":`, erro.message);
            return []; // Retorna vazio, NÃO quebra o site
        }
    },
    
    // ========== FUNÇÕES AUXILIARES ==========
    getImagemUrl: (imagem) => {
        if (!imagem) return null;
        if (imagem.formats?.medium?.url) {
            return `${CONFIG_STRAPI.BASE_URL}${imagem.formats.medium.url}`;
        }
        if (imagem.url) {
            return `${CONFIG_STRAPI.BASE_URL}${imagem.url}`;
        }
        return null;
    },
    
    extrairTexto: (richText, max = 100) => {
        if (!richText || !Array.isArray(richText)) return '';
        let texto = '';
        for (const bloco of richText) {
            if (bloco.type === 'paragraph' && bloco.children) {
                for (const child of bloco.children) {
                    if (child.type === 'text' && child.text) {
                        texto += child.text + ' ';
                    }
                }
            }
        }
        return texto.length > max ? texto.substring(0, max) + '...' : texto.trim();
    }
};

export default CONFIG_STRAPI;
