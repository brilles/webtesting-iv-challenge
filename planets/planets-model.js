const db = require('../database/dbConfig.js');

module.exports = {
  get,
  add,
  del
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

async function del(id) {
  return db('planets')
    .where({ id })
    .del();
}
