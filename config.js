require('dotenv').config();

const config = {
  server: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development'
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME
  },
  api: {
    key: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET
  }
};

module.exports = config;
