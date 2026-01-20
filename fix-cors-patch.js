// fix-cors-patch.js
// Execute após carregar a página para corrigir URLs

function fixStrapiUrls() {
    console.log('🔧 Aplicando patch CORS...');
    
    // Substitui URLs diretas por proxy
    const originalFetch = window.fetch;
    
    window.fetch = function(url, options = {}) {
        // Verifica se é uma URL do Strapi
        if (typeof url === 'string' && url.includes('strapi-final-funcional.onrender.com/api')) {
            // Converte para usar proxy Vercel
            const newUrl = url.replace(
                'https://strapi-final-funcional.onrender.com/api',
                '/strapi-api'
            );
            
            console.log(`🌐 Convertendo: ${url} -> ${newUrl}`);
            
            // Adiciona headers CORS se não existirem
            const newOptions = {
                ...options,
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            };
            
            return originalFetch(newUrl, newOptions);
        }
        
        // Se não for URL do Strapi, usa fetch normal
        return originalFetch(url, options);
    };
    
    console.log('✅ Patch CORS aplicado!');
}

// Executa automaticamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixStrapiUrls);
} else {
    fixStrapiUrls();
}
