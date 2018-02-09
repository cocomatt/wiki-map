var newMarker = [];



function initMap() {
var map = L.map('map').setView([51.045961 , -114.069135], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.053126, -114.094831]).addTo(map)
    .bindPopup('Lighthouse Labs at Assembly.')
    .openPopup();

map.on('click', (e) => {
        console.log(e.latlng);
        L.marker(e.latlng).addTo(map)
        .bindPopup('Place marker here? Yes or No')
    })
}

$(document).ready(function () {
  function placeMarker(location) {
   const marker = new google.maps.Marker({
     position: location,
     map: map
   });
  }

  initMap();
  //console.log(JSON.stringify(results));
});
