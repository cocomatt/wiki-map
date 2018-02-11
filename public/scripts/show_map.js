






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
