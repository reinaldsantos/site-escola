module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // 🔥 CONFIGURAÇÃO ESSENCIAL PARA NGROK
  url: env('PUBLIC_URL', 'http://localhost:1338'),
  proxy: true,  // ← LINHA CRÍTICA QUE FALTOU!
  cron: {
    enabled: false,
  },
});
