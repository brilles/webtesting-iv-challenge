exports.seed = function(knex) {
  return knex('planets').insert([
    {
      name: 'Mercury',
      distance_from_sun: 58000000
    },
    {
      name: 'Venus',
      distance_from_sun: 108000000
    },
    {
      name: 'Earth',
      distance_from_sun: 150000000
    }
  ]);
};
