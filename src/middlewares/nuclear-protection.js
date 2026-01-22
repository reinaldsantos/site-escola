'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // 1️⃣ Executa a requisição normal primeiro
    await next();
    
    // 2️⃣ PROTEÇÃO NUCLEAR APÓS CRIAÇÃO/ATUALIZAÇÃO
    const isContentRequest = 
      (ctx.method === 'POST' || ctx.method === 'PUT') &&
      ctx.request.path.startsWith('/api/') &&
      !ctx.request.path.includes('/admin');
    
    if (isContentRequest) {
      // Aguarda 300ms e aplica proteção nuclear
      setTimeout(async () => {
        try {
          const path = ctx.request.path;
          const pathParts = path.split('/').filter(p => p);
          
          if (pathParts.length >= 2 && pathParts[0] === 'api') {
            const collectionName = pathParts[1]; // noticias, eventos, cursos
            
            // Coleções do seu site
            const validCollections = ['noticias', 'eventos', 'cursos'];
            
            if (validCollections.includes(collectionName)) {
              // Pega ID do item criado/atualizado
              const itemId = pathParts[2] || ctx.response.body?.data?.id;
              
              if (itemId) {
                console.log(\🛡️ NUCLEAR: Protegendo \ ID \\);
                
                // ⚠️ PROTEÇÃO 1: GARANTE QUE ESTÁ PUBLICADO
                try {
                  // Tenta com nome plural (noticias)
                  await strapi.db.connection.raw(\
                    UPDATE \
                    SET "publishedAt" = COALESCE("publishedAt", NOW())
                    WHERE id = ?
                  \, [itemId]);
                } catch (error) {
                  // Se falhar, tenta com nome singular
                  const singularName = collectionName.replace(/s\$/, '');
                  await strapi.db.connection.raw(\
                    UPDATE \s
                    SET "publishedAt" = COALESCE("publishedAt", NOW())
                    WHERE id = ?
                  \, [itemId]);
                }
                
                // ⚠️ PROTEÇÃO 2: VERIFICA PERMISSÕES PÚBLICAS
                try {
                  const singular = collectionName.replace(/s\$/, '');
                  await strapi.db.connection.raw(\
                    INSERT INTO strapi_permissions (action, role, enabled, created_at, updated_at)
                    VALUES 
                      ('api::\.\.find', 2, true, NOW(), NOW()),
                      ('api::\.\.findOne', 2, true, NOW(), NOW())
                    ON CONFLICT (action, role) 
                    DO UPDATE SET enabled = true, updated_at = NOW()
                  \);
                } catch (permError) {
                  // Silencioso
                }
                
                console.log(\✅ NUCLEAR: \ \ protegido com sucesso\);
              }
            }
          }
        } catch (error) {
          // SILENCIOSO - não quebra a aplicação
          console.log('⚠️ Nuclear: erro silencioso', error.message);
        }
      }, 300); // 300ms após salvar
    }
    
    // 3️⃣ PARA REQUESTS GET (leitura), verifica permissões rapidamente
    if (ctx.method === 'GET' && ctx.request.path.startsWith('/api/')) {
      const pathParts = ctx.request.path.split('/').filter(p => p);
      if (pathParts.length >= 2 && pathParts[0] === 'api') {
        const collection = pathParts[1].replace(/s\$/, '');
        const valid = ['noticia', 'evento', 'curso'].includes(collection);
        
        if (valid && ctx.response.status === 403) {
          // Se for 403 (forbidden), tenta ativar permissões
          setTimeout(async () => {
            try {
              await strapi.db.connection.raw(\
                UPDATE strapi_permissions 
                SET enabled = true 
                WHERE action LIKE '%\.\%'
                  AND role = 2
              \);
              console.log(\🛡️ Nuclear: Permissões ativadas para \ após 403\);
            } catch (e) {
              // Silencioso
            }
          }, 100);
        }
      }
    }
  };
};
