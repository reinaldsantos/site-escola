module.exports = ({ env }) => ({
  settings: {
    cors: {
      origin: env("CORS_ALLOW_ORIGIN", "*"),
      enabled: true,
    },
  },
});
