'use strict';

module.exports = [
  // 1️⃣ MIDDLEWARES PADRÃO DO STRAPI
  'strapi::errors',
  
  // 2️⃣ SEGURANÇA COM CONFIG NUCLEAR
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  
  // 3️⃣ CORS PARA SEUS DOMÍNIOS
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://site-escola-five-sand.vercel.app',
        'http://localhost:3000', 
        'http://localhost:3001',
        'https://strapi-final-funcional.onrender.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  
  // 4️⃣ MIDDLEWARES PADRÃO RESTANTES
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
  // 🔥 5️⃣ MIDDLEWARE NUCLEAR - O CERNE DA PROTEÇÃO
  {
    name: 'global::nuclear-protection',
    config: {
      enabled: true,
    },
  },
];