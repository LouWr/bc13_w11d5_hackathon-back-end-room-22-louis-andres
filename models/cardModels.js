const { query } = require("../data/index.js");

async function getAllcards() {
  const result = await query("SELECT * FROM cards");
  return result.rows;
}

async function getCardById(id) {
  const result = await query("SELECT * FROM cards WHERE id = $1;", [id]);
  return result.rows;
}

module.exports = { getCardById, getAllcards };
