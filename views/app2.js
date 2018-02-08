var map;

function initMap() {
  var calgary = {lat: 51.044, lng: -114.044};
  map = new google.maps.Map(document.getElementById('map'), {
    center: calgary,
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: {lat: 51, lng: -114},
    map: map
  });

 google.maps.event.addListener(map, 'click', function(event) {
   placeMarker(event.latLng);
 });
}

function placeMarker(location) {
 var marker = new google.maps.Marker({
   position: location,
   map: map
 });
}
initMap();

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;

//   initMap();

// });
