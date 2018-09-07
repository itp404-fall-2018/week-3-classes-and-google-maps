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

google.maps.event.addListener(map, 'click', (event) => {
  let position = event.latLng;

  let marker = new google.maps.Marker({
    map,
    position
  });

  google.maps.event.addListener(marker, 'click', (event) => {
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({
      location: position
    }, (geocoderResults) => {
      let infoWindow = new google.maps.InfoWindow({
        content: geocoderResults[0].formatted_address,
        position
      });

      infoWindow.open(map);
    });
  });
});
