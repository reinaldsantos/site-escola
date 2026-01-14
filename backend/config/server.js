module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // 🔥 IMPORTANTE: Permitir proxy (ngrok)
  proxy: {
    enabled: true,
    host: '0.0.0.0',
    port: 1338,
    ssl: false
  },
  // URLs permitidas
  url: env('PUBLIC_URL', 'http://localhost:1338'),
});
