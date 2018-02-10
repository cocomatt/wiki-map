const newMarker = [];


const latlng = {"lat":51.053126,"lng":-114.094831};

function initMap(marker, description) {
  const  map = L.map('map').setView([51.045961 , -114.069135], 13);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  L.marker(marker).addTo(map)
    .bindPopup(description)
    .openPopup();

  map.on('click', (e) => {
    console.log(e.latlng);
    L.marker(e.latlng).addTo(map)
    .bindPopup('Place marker here? Yes or No')
  })
}

function generateMarkers(markers) {
  markers.forEach(function(val, index) {
      L.marker(markers[index]).addTo(map)
      .bindPopup(description)
      .openPopup();

  })
  initMap();
}



$(document).ready(function () {
  $.ajax({
    url: '/markers',
    method: 'GET',
    success: function(markers) {
      console.log("success");
      generateMarkers(markers);
    },
    error: function(err) {
      console.log(err);
    }
  });



});
