module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  // 🔥 PERMITE ADMIN REMOTO
  url: '/admin',
  serveAdminPanel: true,
  autoOpen: false,
  // Configurações extras para funcionar via proxy
  forgotPassword: {
    enabled: true,
  },
});
