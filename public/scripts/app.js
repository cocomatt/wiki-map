//TODO refactor this maybe
function initIndexMaps(markers) {

// --- Super hacky code below -
// --- This is choosing the first three UNIQUE map_IDs to render to the three maps ---
  const map1Pos = markers[0].map_latlng;
  const map1Zoom = markers[0].map_zoom;

  let map2Data = [];
  let map3Data = [];

  for (let i = 0; i < markers.length; i++) {
    if (markers[i].map_id != markers[0].map_id) {
      const map2Pos = markers[i].map_latlng;
      const map2Zoom = markers[i].map_zoom;
      const map2Check = markers[i].map_id;
      map2Data.push(map2Pos, map2Zoom, map2Check);
      break;
    };
  };
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].map_id != markers[0].map_id && markers[i].map_id != map2Data[2]) {
      const map3Pos = markers[i].map_latlng;
      const map3Zoom = markers[i].map_zoom;
      map3Data.push(map3Pos, map3Zoom);
      break;
    };
  };

// --- Rendering the maps ---
  const  map1 = L.map('map1').setView(map1Pos, map1Zoom);      //zoom 10 first whole city in view, 20 zoom in all the way

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);

  const  map2 = L.map('map2').setView(map2Data[0], map2Data[1]);      //zoom 10 first whole city in view, 20 zoom in all the way

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

  const  map3 = L.map('map3').setView(map3Data[0], map3Data[1]);      //zoom 10 first whole city in view, 20 zoom in all the way

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map3);

  // --- Renders all markers from markers table to map ---
  // maps.forEach(function(val, index) {
  //   if (maps[index].id == maps[index].map_id) {

  //     L.marker(maps[index].latlng).addTo(map1)
  //         .bindPopup(markers[index].description)
  //         .openPopup();
  //   }

  // })

  // map.on('click', (e) => {
  //   console.log(e.latlng);
  //   L.marker(e.latlng).addTo(map1)
  //   .bindPopup('Place marker here? Yes or No')
  // })
}



$(document).ready(function () {

  $.ajax({
      url: '/maps/index_maps',
      method: 'GET',
      success: function(markers) {
        initIndexMaps(markers);
      },
      error: function(err) {
        console.log(err);
      }
    });


});
