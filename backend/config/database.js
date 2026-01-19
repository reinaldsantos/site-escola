// FORÇA PostgreSQL - SEM SQLITE
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  // OBRIGATÓRIO: DATABASE_URL
  const dbUrl = env('DATABASE_URL');
  
  if (!dbUrl) {
    console.error('❌ ERRO CRÍTICO: DATABASE_URL não definida!');
    console.error('💡 Defina DATABASE_URL no Render Environment Variables');
    throw new Error('DATABASE_URL é obrigatória');
  }
  
  console.log('✅ DATABASE_URL encontrada, usando PostgreSQL...');
  
  const config = parse(dbUrl);
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port || 5432,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: { rejectUnauthorized: false },
      },
    },
  };
};
