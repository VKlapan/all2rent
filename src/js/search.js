var request = {
  query: 'Museum of Contemporary Art Australia',
  fields: ['name', 'geometry'],
};

var service = new google.maps.places.PlacesService(map);

service.findPlaceFromQuery(request, function (results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
    map.setCenter(results[0].geometry.location);
  }
});
