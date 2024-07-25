const { db } = require("./configs")

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
  }
});

module.exports = knex;