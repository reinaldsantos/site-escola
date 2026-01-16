module.exports = ({ env }) => ({
  enabled: true,
  origin: env.array('CORS_ORIGIN', ['*']),
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  keepHeaderOnError: true,
});
