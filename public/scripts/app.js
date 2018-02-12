//TODO refactor this maybe
function initIndexMaps(markers) {

  // --- Super hacky code below -
  // --- This is choosing the first three UNIQUE maps to render to the three maps ---
  const map1Pos = markers[0].map_latlng;
  const map1Zoom = markers[0].map_zoom;
  const map1Id = markers[0].map_id;
  const map1Title = markers[0].map_title;

  let map2Data = [];
  let map3Data = [];
  let map3Data = [];

  for (let i = 0; i < markers.length; i++) {
    if (markers[i].map_id != markers[0].map_id) {
      const map2Pos = markers[i].map_latlng;
      const map2Zoom = markers[i].map_zoom;
      const map2Check = markers[i].map_id;
      const map2Id = markers[i].map_id;
      const map2Title = markers[i].map_title;
      map2Data.push(map2Pos, map2Zoom, map2Check, map2Id, map2Title);
      break;
    };
  };
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].map_id != markers[0].map_id && markers[i].map_id != map2Data[2]) {
      const map3Pos = markers[i].map_latlng;
      const map3Zoom = markers[i].map_zoom;
      const map3Check = markers[i].map_id;
      const map3Id = markers[i].map_id;
      const map3Title = markers[i].map_title;
      map3Data.push(map3Pos, map3Zoom, map3Id, map3Title);
      break;
    };
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].map_id != markers[0].map_id && markers[i].map_id != map2Data[2] && markers[i].map_id != map2Data[3]) {
      const map4Pos = markers[i].map_latlng;
      const map4Zoom = markers[i].map_zoom;
      const map4Id = markers[i].map_id;
      const map4Title = markers[i].map_title;
      map4Data.push(map4Pos, map4Zoom, map4Id, map4Title);
      break;
    };
  };

  // --- Rendering the maps ---
  const  map1 = L.map('map1').setView(map1Pos, map1Zoom);      //zoom 10 first whole city in view, 20 zoom in all the way

  $('#map1_title').prepend(map1Title);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);

  const  map2 = L.map('map2').setView(map2Data[0], map2Data[1]);

  $('#map2_title').prepend(map2Data[4]);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

  const  map3 = L.map('map3').setView(map3Data[0], map3Data[1]);

  $('#map3_title').prepend(map3Data[3]);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map3);

  const  map4 = L.map('map4').setView(map4Data[0], map4Data[1]);

    $('#map4_title').prepend(map4Data[3]);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map4);

  // --- Renders markers that belong to each map ---
  markers.forEach(function(val, index) {
    if (markers[index].id == map1Id) {
      L.marker(markers[index].marker_latlng).addTo(map1)
          .bindPopup(markers[index].marker_description)
          .openPopup();
    } else if (markers[index].id == map2Data[3]) {
      L.marker(markers[index].marker_latlng).addTo(map2)
          .bindPopup(markers[index].marker_description)
          .openPopup();
    } else if (markers[index].id == map3Data[2]) {
      L.marker(markers[index].marker_latlng).addTo(map3)
          .bindPopup(markers[index].marker_description)
          .openPopup();
    } else if (markers[index].id == map4Data[2]) {
      L.marker(markers[index].marker_latlng).addTo(map4)
          .bindPopup(markers[index].marker_description)
          .openPopup();
    }
  });

  // map1.on('click', (e) => {
  //   console.log(e.latlng);
  //   L.marker(e.latlng).addTo(map1)
  //   .bindPopup('Place marker here? Yes or No')
  // })
}




$(document).ready(function () {
  jQuery("time.timeago").timeago();
  $.ajax({
      url: '/maps/data/index_maps',
      method: 'GET',
      success: function(markers) {
        initIndexMaps(markers);

      },
      error: function(err) {
        console.log(err);
      }
    });

  function escape (str) {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(str))
    return div.innerHTML
  }

  function renderPredefinedCSS (htmlToRender, deckNum) {
    const postElementToBeRenderedBy = document.getElementById(`card-deck-${deckNum}`)
    postElementToBeRenderedBy.insertAdjacentHTML('afterbegin', htmlToRender)
  }


  function createMapPostElement (post, positionIncrementer) {
    let htmlStr = ''
    htmlStr =  `<div class="card bg-light">
                  <div class="card-header" id="map-${positionIncrementer}" style="height: 348px;"></div>
                    <div class="card-body">
                      <h4 class="title text-centre" id="maptitle_${positionIncrementer}"></h4>
                      <h6 class="card-subtitle mb-4 text-muted">@${userHandle}</h6>
                      <p class="card-text ${escape()}"></p>
                      <a href="/${pageSpawnedOn}" class="btn btn-danger p-2" style="width: 90px;"><strong>Fave It!</strong></a>
                      <a href="/map/${mapId}" class="btn btn-danger p-2" style="width: 90px;"><strong>Edit It!</strong></a>
                    </div>
                    <div class="card-footer">
                     <small class="text-muted">Last updated ${jQuery.timeago(jQuery.now())}</small>
                  </div>
                </div> `

    return htmlStr
  }

  function renderPosts (posts) {
    let mapPostElement;
    let positionIncrementer = 2;
    let deckNum;
    let newDeck;

    posts.reverse().forEach((post) => {
      mapPostElement = createPostElement(post, positionIncrementer)

      renderPredefinedCSS(mapPostElement, deckNum);

      positionIncrementer++
      if(positionIncrementer = 3) {
        deckNum ++;
        newDeck = `<div class="card-deck m-2" id="card-deck-${deckNum}">
                   </div id="end-deck-${deckNum}">`;
        const postElementToBeRenderedBy = document.getElementById(`end-deck-${deckNum}`)
        postElementToBeRenderedBy.insertAdjacentHTML('afterbegin', newDeck)

      }
    })
  }

  function updatePosts (formId) {
    $.ajax({
      urlOne: $(formId).attr('action'),
      method: 'GET',
      success: function (posts) {
        renderPosts(posts)
      }
    })
  }

  function submitPostsClearTextField (formId, formMessage) {
    $.ajax({
      urlOne: $(formId).attr('action'),
      type: 'POST',
      dataOne: $(formId).serialize(),
      success: function () {
        updatePosts(formId)
      }
    })

    $(formMessage).val('')
  }

  function main () {
    let formId = '#submit-post'
    let formMessage = '#new-post-textarea[name|="text"]'
    let formText = $('#new-post-textarea[name|="text"]').val()


    $(formIdOne).on('submit', function (event) {
      event.preventDefault()

      if (formText.length > 140) {
        alert(`Message is longer than 140 characters, ${formText.length}.`)
        return 0
      }
      if ($(formMessage).val() === '') {
        alert(`Please write a message before attempting to tweet!`)
        return 0
      }
      if ($(formMessage).val() === false) {
        alert(`Message is invalid.`)
        return 0
      }

      submitMapClearTextField(formId, formMessage)
    })

    updatePosts(formId);
  }

  main()
});
