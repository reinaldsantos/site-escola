module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // ⚠️ CONFIGURAÇÃO NUCLEAR - ESTABILIDADE TOTAL
  url: env('PUBLIC_URL', 'https://strapi-final-funcional.onrender.com'),
  proxy: true,
  cron: {
    enabled: false, // ⚠️ DESATIVA cron jobs que podem causar problemas
  },
  // Otimizações de performance
  emitErrors: false,
  // Timeouts otimizados para Render
  socket: '/tmp/nginx.socket',
  // Middleware settings
  settings: {
    gzip: {
      enabled: true,
      options: {
        br: false
      }
    },
    public: {
      path: './public',
      maxAge: 60000,
    },
  },
  // Load balancing para Render
  worker: {
    timeout: 30000,
  },
});