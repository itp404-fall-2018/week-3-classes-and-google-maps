let usc = new google.maps.LatLng(34.043514, -118.266210);

let map = new google.maps.Map(document.getElementById('map'), {
  center: usc,
  zoom: 8
});

let uscMarker = new google.maps.Marker({
  map,
  position: usc,
  animation: google.maps.Animation.DROP,
});

let infoWindow = new google.maps.InfoWindow({
  content: '<strong>USC</strong>',
  position: usc
});

google.maps.event.addListener(uscMarker, 'click', (event) => {
  infoWindow.open(map);
});

$('form').on('submit', function(event) {
  event.preventDefault();

  let searchTerm = $('input[type=search]').val();
  $('input').val('');

  let geocoder = new google.maps.Geocoder();

  geocoder.geocode({
    address: searchTerm
  }, (geocoderResults) => {
    let position = geocoderResults[0].geometry.location;
    map.setCenter(position);

    let marker = new google.maps.Marker({
      map,
      position,
      animation: google.maps.Animation.DROP,
    });
  });
});
