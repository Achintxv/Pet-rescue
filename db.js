const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',         // Your PostgreSQL username
  host: 'localhost',
  database: 'Donation',  // Your database name
  password: 'root', // Your PostgreSQL password
  port: 5432,               // Default PostgreSQL port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
