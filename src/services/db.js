const config = require('./config');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : config.dbHost,
    user : config.dbUser,
    password : config.dbPwd,
    database : config.db,
  },
});

module.exports = knex;
