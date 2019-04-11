const db = require('../database/dbConfig.js');

module.exports = {
  get,
  add
};

function get() {
  return db('planets');
}

async function add(planet) {
  const [id] = await db('planets').insert(planet);
  return db('planets')
    .where({ id })
    .first();
}
