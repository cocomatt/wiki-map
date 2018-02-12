

function renderMap(mapData) {

  const map = L.map('map').setView({lat: 51.027752, lng: -114.073105}, 10);

  // $('#map-title').prepend(mapData[0].map_title);
  // $('#map-description').append(mapData[0].map_description);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  map.on('click', (e) => {
    console.log(e.latlng);
    L.marker(e.latlng).addTo(map)
    .bindPopup('Place marker here? Yes or No')
  });
  // mapData.forEach(function(val,index) {
  //   L.marker(mapData[index].marker_latlng).addTo(map)
  //     .bindPopup(mapData[index].marker_description)
  //     .openPopup();
  // });
}


$(document).ready(function () {

  // const mapID = getUrlParams();

  // $.ajax({
  //     url: `/maps/data/${mapID}`,
  //     method: 'GET',
  //     success: function(mapData) {
  //       renderMap(mapData);
  //     },
  //     error: function(err) {
  //       console.log(err);
  //     }
  //   });
  renderMap();

});
