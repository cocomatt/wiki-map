exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, email: 'nic@email.com', password: '1234'}),
        knex('users').insert({id: 2, email: 'jesse@email.com', password: '1234'}),
        knex('users').insert({id: 3, email: 'matt@email.com', password: '1234'})
      ]);
    });
};
