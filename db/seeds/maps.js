
exports.seed = function(knex, Promise) {
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('maps').insert({id: 1, title: 'Map example I', description: 'Map description numero uno', latlng: {lat: 51.027752, lng: -114.073105}, zoom:10 , user_id: 2}),
        knex('maps').insert({id: 2, title: 'Map example ii', description: 'Map description 2', latlng: {lat: 51.146792, lng: -114.171982}, zoom: 13, user_id: 1}),
        knex('maps').insert({id: 3, title: 'Map example 3', description: 'Map description iii', latlng: {lat: 51.093780, lng: -113.994827}, zoom: 12, user_id: 3}),
        knex('maps').insert({id: 4, title: 'Map example 4', description: 'Map description IV', latlng: {lat: 50.921392, lng: -114.038086}, zoom: 13, user_id: 1}),
        knex('maps').insert({id: 5, title: 'Map example V', description: 'Map description 5', latlng: {lat: 50.878953, lng: -113.924789}, zoom: 10, user_id: 2}),
        knex('maps').insert({id: 6, title: 'Map example vi', description: 'Map description 6', latlng: {lat: 51.030343, lng: -114.175415}, zoom: 9, user_id: 1}),
      ]);
    });
};
