exports.up = function(knex, Promise) {
  return knex.schema.createTable('planets', planets => {
    planets.increments();

    planets
      .string('name', 128)
      .notNullable()
      .unique();
    planets.integer('distance_from_sun').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('planets');
};
