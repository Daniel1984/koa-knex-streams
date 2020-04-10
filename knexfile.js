// Update with your config settings.
require('dotenv').config();
const config = require('./src/services/config');

const connection = {
  database: config.db,
  user:     config.dbUser,
  password: config.dbPwd,
  host:     config.dbHost,
};

module.exports = {
  development: {
    client: 'postgresql',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
