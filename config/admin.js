module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'myadminjwtsecret2025render'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'myapisecretsalt2025render'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'mytransfersalt2025render'),
    },
  },
  // ⚠️ CONFIGURAÇÃO NUCLEAR - DESATIVA PROBLEMAS
  flags: {
    nps: false,           // Desativa pesquisas
    promoteEE: false,     // Desativa promoções
  },
  // Otimizações de performance
  watchIgnoreFiles: [
    '**/config/sync/**',
    '**/src/**',
  ],
});