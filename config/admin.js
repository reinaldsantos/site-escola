module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'defaultAdminSecret123'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'defaultApiTokenSalt123'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'defaultTransferTokenSalt123'),
    },
  },
});
