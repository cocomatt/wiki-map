exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.decimal('x');
    table.decimal('y');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps');
};
