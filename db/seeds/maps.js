
exports.seed = function(knex, Promise) {
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('maps').insert({id: 1, map_title: 'Map example I', map_description: 'Map description numero uno', map_latlng: {lat: 51.027752, lng: -114.073105}, map_zoom:10 , user_id: 2}),
        knex('maps').insert({id: 2, map_title: 'Map example ii', map_description: 'Map description 2', map_latlng: {lat: 51.146792, lng: -114.171982}, map_zoom: 13, user_id: 1}),
        knex('maps').insert({id: 3, map_title: 'Map example 3', map_description: 'Map description iii', map_latlng: {lat: 51.093780, lng: -113.994827}, map_zoom: 12, user_id: 3}),
        knex('maps').insert({id: 4, map_title: 'Map example 4', map_description: 'Map description IV', map_latlng: {lat: 50.921392, lng: -114.038086}, map_zoom: 13, user_id: 1}),
        knex('maps').insert({id: 5, map_title: 'Map example V', map_description: 'Map description 5', map_latlng: {lat: 50.878953, lng: -113.924789}, map_zoom: 10, user_id: 2}),
        knex('maps').insert({id: 6, map_title: 'Map example vi', map_description: 'Map description 6', map_latlng: {lat: 51.030343, lng: -114.175415}, map_zoom: 9, user_id: 1}),
      ]);
    });
};
