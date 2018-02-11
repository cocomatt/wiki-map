//--- Grabs the map ID from the url ---
function getUrlParams( prop ) {
    var params = [];
    var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf('?') + 1 ) );
    var definitions = search.split( '/' );

    definitions.forEach(function(val,key) {
        var parts = val.split( '=', 2 );
        if (key == 4) {
          params.push(parts[0]);
        }
    });
    return params[0];
}


function renderMap(mapData) {

  const map = L.map('map').setView(mapData[0].map_latlng, mapData[0].map_zoom);

  $('#map-title').prepend(mapData[0].map_title);
  $('#map-description').append(mapData[0].map_description);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}


$(document).ready(function () {

  const mapID = getUrlParams();

  $.ajax({
      url: `/maps/data/${mapID}`,
      method: 'GET',
      success: function(mapData) {
        renderMap(mapData);
      },
      error: function(err) {
        console.log(err);
      }
    });


});
