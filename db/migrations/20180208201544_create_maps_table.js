exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    table.increments();
    table.string('map_title');
    table.string('map_description');
    table.json('map_latlng');
    table.integer('map_zoom');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps');
};
