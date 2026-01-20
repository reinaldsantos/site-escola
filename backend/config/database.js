// Configuração SIMPLES para PostgreSQL no Render
// Formato CommonJS (não ES modules) para máxima compatibilidade

module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: { rejectUnauthorized: false },
      },
    },
  };
};
