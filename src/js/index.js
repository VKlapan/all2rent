import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { ModelObjectHandler } from './modelObjectsHandler';

const model = new ModelObjectHandler();

console.log(model.getAllPoints());
console.log(model.getAllAppartments());

function initMap() {
  //  const markerCluster = new MarkerClusterer({ map, markers });

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: { lat: -28.024, lng: 140.887 },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER,
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    fullscreenControl: true,
  });

  map.addListener('click', mapsMouseEvent => {
    console.log(mapsMouseEvent.latLng.toJSON());
  });

  map.addListener('bounds_changed', () => {
    console.log(map.getBounds().toJSON());
  });

  const infoWindow = new google.maps.InfoWindow();
  // Create an array of alphabetical characters used to label the markers.
  const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener('click', () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
      console.log('CLICK!!!');
    });
    return marker;
  });

  //console.log(markers);

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });

  var request = {
    query: `Київ Конєва, 10`,
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

  function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });

    google.maps.event.addListener(marker, 'click', mapsMouseEvent => {
      console.log(mapsMouseEvent.latLng.toJSON());
      console.log(place.name);
      infoWindow.setContent(place.name || '');
      infoWindow.open(map);
    });
  }
}

const locations = model.getAllPoints();

window.initMap = initMap;
