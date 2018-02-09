function placeMarker(location) {
 const marker = new google.maps.Marker({
   position: location,
   map: map
 });
}

// --- Creates a map inside the map <div> ---
function initMap() {
  const calgary = {lat: 51.044, lng: -114.044};
  map = new google.maps.Map(document.getElementById('map'), {
    center: calgary,
    zoom: 10
  });

  // --- Creates a marker on THIS map ---
  var marker = new google.maps.Marker({
    position: {lat: 51, lng: -114},
    map: map
  });

// --- Adds marker to THIS map when clicked ---
 google.maps.event.addListener(map, 'click', function(event) {
   placeMarker(event.latLng);
 });
}

function findMap(id) {
  knex
    .select('*')
    .from('maps')
    .asCallback((err, rows) => {
       initSpecificMap(rows)
    });
}

function initFoundMap(location) {
  const location = {lat: location.x, lng: location.y};
  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 10
  });
}


$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
      console.log(user);
    }

   initMap();

});

