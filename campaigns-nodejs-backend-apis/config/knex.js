const development = require('./index').development;
const production = require('./index').production;

module.exports = {
  development: {
    // client: 'pg',
    client: 'mysql',
    useNullAsDefault: true,
    migrations: {
      directory: './../src/migrations'
    },
    seeds: {
      directory: './../src/seeds'
    },
    connection: {
      host: '127.0.0.1',
      user: development.username,
      password: development.password,
      database: development.database
    }
  },

  production: {
    client: 'postgresql',
    // client: 'mysql',
    migrations: {
      directory: './../src/migrations'
    },
    seeds: {
      directory: './../src/seeds'
    },
    connection: {
      host: production.host,
      user: production.username,
      password: production.password,
      database: production.database
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};