module.exports = require('knex')({
  client: 'mysql',
  connection: process.env.JAWSDB_URL || {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test',
  },
});
