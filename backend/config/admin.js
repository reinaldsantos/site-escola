module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'sua-chave-segura-aqui'),
    },
  },
  // 🔥 CONFIGURAÇÃO DEFINITIVA
  url: 'https://unifoliolate-vigorless-tamekia.ngrok-free.dev',
  serveAdminPanel: true,
  autoOpen: false,
});
