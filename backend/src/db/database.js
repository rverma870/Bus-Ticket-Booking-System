const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.db_user,
  password: process.env.db_password,
  host: 'localhost',
  port: '5432',
  database: process.env.database
});

module.exports = pool;
