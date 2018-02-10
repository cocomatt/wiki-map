
function initIndexMaps(markers, description) {
  const map = L.map('map').setView([51.045961 , -114.069135], 13);      //zoom 10 first whole city in view, 20 zoom in all the way

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  const map2 = L.map('map2').setView([51.045961 , -114.069135], 10);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

// --- Renders all markers from markers table to map ---
  markers.forEach(function(val, index) {
    L.marker(markers[index].latlng).addTo(map)
        .bindPopup(markers[index].description)
        .openPopup();
  })

  map.on('click', (e) => {
    console.log(e.latlng);
    L.marker(e.latlng).addTo(map)
    .bindPopup('Place marker here? Yes or No')
  })
}



$(document).ready(function () {
  $.ajax({
    url: '/markers',
    method: 'GET',
    success: function(markers) {
      console.log("success");
      initIndexMaps(markers);
    },
    error: function(err) {
      console.log(err);
    }
  });


});
