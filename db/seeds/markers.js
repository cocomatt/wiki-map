//   ./db/seeds/markers.js
exports.seed = function(knex, Promise) {
  return knex('markers').del()
    .then(function () {
      return Promise.all([
        knex('markers').insert({id: 1, title: 'Assembly', description: 'Where Lighthouse Labs is', imageURL: '', latlng: {lat: 51.053126, lng: -114.094831}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 2, title: 'Calgary Tower', description: 'Spinny restaurant', imageURL: '', latlng: {lat: 51.044308 , lng: -114.063095}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 3, title: 'W.R. Castell Central Library', description: 'Downtown Calgary Public Library', imageURL: '', latlng: {lat: 51.0470276, lng: -114.0578995}, map_id: 2, user_id: 3}),
        knex('markers').insert({id: 4, title: 'Alexander Calhoun Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 51.0255318, lng: -114.0947876}, map_id: 3, user_id: 3}),
        knex('markers').insert({id: 5, title: 'Bowness Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 51.0872841, lng: -114.1830978}, map_id: 5, user_id: 3}),
        knex('markers').insert({id: 6, title: 'Fish Creek Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 50.9516296, lng: -114.0603409}, map_id: 6, user_id: 6}),
        knex('markers').insert({id: 7, title: 'Forest Lawn Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 51.045105, lng: -113.9652023}, map_id: 4, user_id: 6}),
        knex('markers').insert({id: 8, title: 'Glenmore Square Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 50.9835968, lng: -114.0141449}, map_id: 3, user_id: 6}),
        knex('markers').insert({id: 9, title: 'Louise Riley Library', description: 'Calgary Public Library named after a person', imageURL: '', latlng: {lat: 51.0652428, lng: -114.1038132}, map_id: 3, user_id: 5}),
        knex('markers').insert({id: 10, title: 'Memorial Park Library', description: 'Old library', imageURL: '', latlng: {lat: 51.0412674, lng: -114.0683823}, map_id: 5, user_id: 5}),
        knex('markers').insert({id: 11, title: 'Nose Hill Library', description: 'body part library', imageURL: '', latlng: {lat: 51.0960922, lng: -114.1391296}, map_id: 1, user_id: 5}),
        knex('markers').insert({id: 12, title: 'Shawnessy Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 50.8986015, lng: -114.062851}, map_id: 2, user_id: 4}),
        knex('markers').insert({id: 13, title: 'Signal Hill Library', description: 'Morse code', imageURL: '', latlng: {lat: 51.0181122, lng: -114.1756439}, map_id: 3, user_id: 4}),
        knex('markers').insert({id: 14, title: 'Southwood Library', description: 'libary named after a person', imageURL: '', latlng: {lat: 50.963623, lng: -114.0860367}, map_id: 4, user_id: 4}),
        knex('markers').insert({id: 15, title: 'Judith Umbach Library', description: 'library', imageURL: '', latlng: {lat: 51.1121979, lng: -114.0633087}, map_id: 5, user_id: 1}),
        knex('markers').insert({id: 16, title: 'Village Square Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 51.0753708, lng: -113.9525833}, map_id: 6, user_id: 1}),
        knex('markers').insert({id: 17, title: 'Crowfoot Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 51.1295815, lng: -114.1926956}, map_id: 2, user_id: 1}),
        knex('markers').insert({id: 18, title: 'Country Hills Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 51.159462, lng: -114.0675659}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 19, title: 'Saddletowne Library', description: 'Calgary Public Library', imageURL: '', latlng: {lat: 51.1196709, lng: -113.9485092}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 20, title: 'Westbrook Library', description: 'Giddy up!', imageURL: '', latlng: {lat: 51.0404778, lng: -114.138237}, map_id: 3, user_id: 2}),
      ]);
    });
};

