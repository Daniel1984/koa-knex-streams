module.exports = {
  dbHost: process.env.POSTGRES_HOST,
  dbUser: process.env.POSTGRES_USER,
  dbPwd: process.env.POSTGRES_PASSWORD,
  db: process.env.POSTGRES_DB,
  port: process.env.API_PORT,
};
