exports.up = function(knex, Promise) {
  return knex.schema.createTable('markers', function (table) {
    table.increments('id');
    table.string('marker_title');
    table.string('marker_description');
    table.string('imageURL');
    table.json('marker_latlng');  //[results.latLng.lat, results.latLng.lng]
    table.integer('map_id');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('markers');
};




