module.exports = ({ env }) => {
  console.log('🔐 ADMIN CONFIG START =====================');
  console.log('TRANSFER_TOKEN_SALT:', env('TRANSFER_TOKEN_SALT') ? 'SET' : 'NOT SET');
  console.log('ADMIN_JWT_SECRET:', env('ADMIN_JWT_SECRET') ? 'SET' : 'NOT SET');
  console.log('API_TOKEN_SALT:', env('API_TOKEN_SALT') ? 'SET' : 'NOT SET');
  
  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
  };
};
