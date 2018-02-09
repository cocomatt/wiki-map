exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.decimal('x', 8, 5);
    table.decimal('y', 8, 5);
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps');
};
