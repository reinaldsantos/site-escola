module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1338),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
