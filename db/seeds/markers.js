//   ./db/seeds/markers.js
exports.seed = function(knex, Promise) {
  return knex('markers').del()
    .then(function () {
      return Promise.all([
        knex('markers').insert({id: 1, marker_title: 'Assembly', marker_description: 'Where Lighthouse Labs is', imageURL: '', marker_latlng: {lat: 51.053126, lng: -114.094831}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 2, marker_title: 'Calgary Tower', marker_description: 'Spinny restaurant', imageURL: '', marker_latlng: {lat: 51.044308 , lng: -114.063095}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 3, marker_title: 'W.R. Castell Central Library', marker_description: 'Downtown Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.0470276, lng: -114.0578995}, map_id: 2, user_id: 3}),
        knex('markers').insert({id: 4, marker_title: 'Alexander Calhoun Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.0255318, lng: -114.0947876}, map_id: 3, user_id: 3}),
        knex('markers').insert({id: 5, marker_title: 'Bowness Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.0872841, lng: -114.1830978}, map_id: 5, user_id: 3}),
        knex('markers').insert({id: 6, marker_title: 'Fish Creek Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 50.9516296, lng: -114.0603409}, map_id: 6, user_id: 6}),
        knex('markers').insert({id: 7, marker_title: 'Forest Lawn Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.045105, lng: -113.9652023}, map_id: 4, user_id: 6}),
        knex('markers').insert({id: 8, marker_title: 'Glenmore Square Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 50.9835968, lng: -114.0141449}, map_id: 3, user_id: 6}),
        knex('markers').insert({id: 9, marker_title: 'Louise Riley Library', marker_description: 'Calgary Public Library named after a person', imageURL: '', marker_latlng: {lat: 51.0652428, lng: -114.1038132}, map_id: 3, user_id: 5}),
        knex('markers').insert({id: 10, marker_title: 'Memorial Park Library', marker_description: 'Old library', imageURL: '', marker_latlng: {lat: 51.0412674, lng: -114.0683823}, map_id: 5, user_id: 5}),
        knex('markers').insert({id: 11, marker_title: 'Nose Hill Library', marker_description: 'body part library', imageURL: '', marker_latlng: {lat: 51.0960922, lng: -114.1391296}, map_id: 1, user_id: 5}),
        knex('markers').insert({id: 12, marker_title: 'Shawnessy Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 50.8986015, lng: -114.062851}, map_id: 2, user_id: 4}),
        knex('markers').insert({id: 13, marker_title: 'Signal Hill Library', marker_description: 'Morse code', imageURL: '', marker_latlng: {lat: 51.0181122, lng: -114.1756439}, map_id: 3, user_id: 4}),
        knex('markers').insert({id: 14, marker_title: 'Southwood Library', marker_description: 'libary named after a person', imageURL: '', marker_latlng: {lat: 50.963623, lng: -114.0860367}, map_id: 4, user_id: 4}),
        knex('markers').insert({id: 15, marker_title: 'Judith Umbach Library', marker_description: 'library', imageURL: '', marker_latlng: {lat: 51.1121979, lng: -114.0633087}, map_id: 5, user_id: 1}),
        knex('markers').insert({id: 16, marker_title: 'Village Square Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.0753708, lng: -113.9525833}, map_id: 6, user_id: 1}),
        knex('markers').insert({id: 17, marker_title: 'Crowfoot Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.1295815, lng: -114.1926956}, map_id: 2, user_id: 1}),
        knex('markers').insert({id: 18, marker_title: 'Country Hills Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.159462, lng: -114.0675659}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 19, marker_title: 'Saddletowne Library', marker_description: 'Calgary Public Library', imageURL: '', marker_latlng: {lat: 51.1196709, lng: -113.9485092}, map_id: 1, user_id: 2}),
        knex('markers').insert({id: 20, marker_title: 'Westbrook Library', marker_description: 'Giddy up!', imageURL: '', marker_latlng: {lat: 51.0404778, lng: -114.138237}, map_id: 3, user_id: 2}),
      ]);
    });
};

