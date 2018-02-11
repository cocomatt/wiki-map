


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


$(document).ready(function () {

console.log(getUrlParams());

  // $.ajax({
  //     url: `/maps/data/${mapID}`,
  //     method: 'GET',
  //     success: function(mapData) {
  //       //initIndexMaps(markers);

  //     },
  //     error: function(err) {
  //       console.log(err);
  //     }
  //   });


});
