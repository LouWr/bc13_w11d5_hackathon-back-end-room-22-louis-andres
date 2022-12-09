// Set up pooling.
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: function (text, params) {
    return pool.query(text, params);
  },
};
