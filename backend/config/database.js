const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  console.log('🚀 DATABASE CONFIG START ====================');
  console.log('NODE_ENV:', env('NODE_ENV'));
  
  const dbUrl = env('DATABASE_URL');
  console.log('DATABASE_URL exists?', !!dbUrl);
  
  if (!dbUrl) {
    console.error('❌ CRITICAL ERROR: DATABASE_URL is not defined!');
    console.log('Available env vars:', Object.keys(process.env).filter(k => k.includes('DATABASE')));
    throw new Error('DATABASE_URL is required');
  }
  
  console.log('✅ DATABASE_URL found, parsing...');
  
  try {
    const config = parse(dbUrl);
    console.log('✅ Parse successful!');
    console.log('📊 Database:', config.database);
    console.log('🌐 Host:', config.host);
    console.log('👤 User:', config.user);
    
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
  } catch (error) {
    console.error('❌ Parse error:', error.message);
    console.log('🔗 DATABASE_URL:', dbUrl ? '***hidden***' : 'undefined');
    throw error;
  } finally {
    console.log('🏁 DATABASE CONFIG END ======================');
  }
};
