module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1338,
  app: {
    keys: env.array('APP_KEYS'),
  },
  // 🔥 CONFIGURAÇÃO DEFINITIVA
  url: 'https://unifoliolate-vigorless-tamekia.ngrok-free.dev',
  proxy: true,
});
