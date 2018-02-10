exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    table.increments();
    table.string('title');
    table.string('description');
    table.json('latlng');
    table.integer('zoom');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps');
};
