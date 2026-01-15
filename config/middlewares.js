module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: false,
        directives: {
          'default-src': ["'self'", "https://unifoliolate-vigorless-tamekia.ngrok-free.dev"],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https:"],
          'style-src': ["'self'", "'unsafe-inline'", "https:"],
          'img-src': ["'self'", "data:", "blob:", "https://market-assets.strapi.io", "*"],
          'connect-src': ["'self'", "https:", "http:", "ws:"],
          'font-src': ["'self'", "https:", "data:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://unifoliolate-vigorless-tamekia.ngrok-free.dev', 'http://localhost:1338'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
