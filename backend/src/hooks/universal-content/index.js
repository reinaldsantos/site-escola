// src/hooks/universal-content/index.js
module.exports = (strapi) => ({
  async initialize() {
    console.log('🔧 Hook Universal iniciado');
    
    setTimeout(async () => {
      try {
        const role = await strapi.db.query('plugin::users-permissions.role').findOne({
          where: { type: 'public' }
        });
        
        if (role) {
          console.log('✅ Permissões automáticas ativas');
        }
      } catch (error) {
        console.log('⚠️ Configure permissões manualmente em: Settings → Users & Permissions → Public');
      }
    }, 10000);
  }
});
