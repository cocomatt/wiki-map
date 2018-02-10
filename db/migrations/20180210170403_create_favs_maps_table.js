exports.up = function(knex, Promise) {
  return knex.schema.createTable('fav_maps', function (table) {
    table.integer('user_id');
    table.integer('map_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fav_maps');
};
