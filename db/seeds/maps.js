
exports.seed = function(knex, Promise) {
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('maps').insert({id: 1, name: 'Food', description: 'Good places to eat', x: 51.04489, y: -114.04443, user_id: 2}),
        knex('maps').insert({id: 2, name: 'Views', description: 'Great views around the city', x: 51.14498, y: -114.14498, user_id: 1}),
        knex('maps').insert({id: 3, name: 'Parks', description: 'Awesome parks', x: 50.04432, y: -114.14473, user_id: 3})
      ]);
    });
};
