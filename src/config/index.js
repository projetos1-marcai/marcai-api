module.exports = {
  app: {
    port: process.env.PORT,
  },
  db: {
    production: process.env.DB_URL_PROD,
    develop: process.env.DB_URL_DEV,
  },
  access_token: {
    jwt_secret: process.env.JWT_SECRET,
  },
  salt_rounds: process.env.SALT_ROUNDS,
};
