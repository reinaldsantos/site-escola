const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  // ⚠️ SEMPRE PostgreSQL - NUNCA SQLite
  const config = parse(env('DATABASE_URL'));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: { 
          rejectUnauthorized: false,
          require: true
        },
      },
      // ⚠️ CONFIGURAÇÃO NUCLEAR - CONEXÃO ESTÁVEL
      pool: {
        min: 2,           // Sempre manter 2 conexões
        max: 10,          // Máximo 10 conexões
        acquireTimeoutMillis: 60000,  // 60 segundos timeout
        idleTimeoutMillis: 30000,     // Fecha após 30s inativo
        createTimeoutMillis: 30000,   // 30s para criar conexão
        destroyTimeoutMillis: 5000,   // 5s para destruir
        reapIntervalMillis: 1000,     // Verifica a cada 1s
        createRetryIntervalMillis: 200, // Tenta reconectar a cada 200ms
      },
      // Logs apenas em desenvolvimento
      debug: env('NODE_ENV') === 'development',
      // Use returning para todas as queries
      useNullAsDefault: false,
    },
  };
};