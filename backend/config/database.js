const { parse } = require("pg-connection-string");
module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    const config = parse(env("DATABASE_URL"));
    return {
      connection: {
        client: "postgres",
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: { rejectUnauthorized: false },
        },
      },
    };
  }
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      useNullAsDefault: true,
    },
  };
};
