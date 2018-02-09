exports.up = function(knex, Promise) {
  return knex.schema.createTable('markers', function (table) {
    table.increments('id');
    table.string('title');
    table.string('description');
    //table.decimal('lat', 8, 5);
    //table.decimal('lng', 8, 5);
    table.json('latLng')  //[results.latLng.lat, results.latLng.lgn]
    table.integer('map_id');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('markers');
};




