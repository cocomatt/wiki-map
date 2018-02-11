//TODO refactor this maybe
function initIndexMaps(maps) {
  console.log(maps[0].latlng);

  const  map1 = L.map('map1').setView(maps[0].latlng, maps[0].zoom);      //zoom 10 first whole city in view, 20 zoom in all the way

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);

  const  map2 = L.map('map2').setView(maps[1].latlng, maps[1].zoom);      //zoom 10 first whole city in view, 20 zoom in all the way

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

  const  map3 = L.map('map3').setView(maps[2].latlng, maps[2].zoom);      //zoom 10 first whole city in view, 20 zoom in all the way

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map3);

  // --- Renders all markers from markers table to map ---
  // markers.forEach(function(val, index) {

  //   L.marker(markers[index].latlng).addTo(map1)
  //       .bindPopup(markers[index].description)
  //       .openPopup();
  // })

  // map.on('click', (e) => {
  //   console.log(e.latlng);
  //   L.marker(e.latlng).addTo(map1)
  //   .bindPopup('Place marker here? Yes or No')
  // })
}



$(document).ready(function () {
  // $.ajax({
  //   url: '/markers',
  //   method: 'GET',
  //   success: function(markers) {
  //     initIndexMaps(markers);
  //   },
  //   error: function(err) {
  //     console.log(err);
  //   }
  // });

  $.ajax({
      url: '/maps/index_maps',
      method: 'GET',
      success: function(maps) {
        initIndexMaps([maps[0], maps[1], maps[2]]);
      },
      error: function(err) {
        console.log(err);
      }
    });


});
