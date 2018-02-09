//   ./db/seeds/markers.js
exports.seed = function(knex, Promise) {
  return knex('markers').del()
    .then(function () {
      return Promise.all([
        knex('markers').insert({id: 1, title: 'Assembly', description: 'Where Lighthouse Labs is', latlng: {lat: 51.053126, lng: -114.094831}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 2, title: 'Calgary Tower', description: 'Spinny restaurant', latlng: {lat: 51.044308 , lng: -114.063095}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 3, title: 'Library', description: 'Old library', latlng: {lat: 51.041178 , lng: -114.069092}, map_id: 1, user_id: 2}),
      ]);
    });
};

