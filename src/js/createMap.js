import { MarkerClusterer } from '@googlemaps/markerclusterer';

export function createMap(container) {
  const ZOOM_MIDDLE_VIEW = 16;
  const ZOOM_CLOSE_VIEW = 18;

  const map = new google.maps.Map(container, {
    zoom: ZOOM_MIDDLE_VIEW,
    center: { lat: 50.3864813, lng: 30.4610184 },
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

  const mapObservers = [];

  const addPoints = points => {
    const markers = points.map(({ id, lat, lng }) => {
      const label = id.toString();

      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
      });

      marker.addListener('click', mapsMouseEvent => {
        markerChoosen(marker.position, marker.label);
      });

      return marker;
    });

    new MarkerClusterer({ markers, map });
  };

  map.addListener('bounds_changed', boundsChanged);

  //TODO: разнести подписчиков по типу ивента на этапе подписки

  function markerChoosen(markerPosition, markerLabel) {
    for (let i = 0; i < mapObservers.length; i++) {
      if (mapObservers[i].eventName === 'click') {
        map.setZoom(ZOOM_CLOSE_VIEW);
        map.setCenter(markerPosition);

        mapObservers[i].listener(markerLabel);
      }
    }
  }

  function boundsChanged() {
    for (let i = 0; i < mapObservers.length; i++) {
      if (mapObservers[i].eventName === 'bounds_changed') {
        mapObservers[i].listener(map.getBounds().toJSON());
      }
    }
  }

  const findNewPoints = request => {
    return new Promise((resolve, reject) => {
      var service = new google.maps.places.PlacesService(map);

      service.findPlaceFromQuery(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          createMarker(results[0]);
          const newPointCoordinates = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          };

          map.setCenter(results[0].geometry.location);
          resolve(newPointCoordinates);
        } else {
          reject(status);
        }
      });

      function createMarker(place) {
        if (!place.geometry || !place.geometry.location) return;

        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
        });
      }
    });
  };

  const zoomTo = zoom => {
    map.setCenter({ lat: 50.3864813, lng: 30.4610184 });
    map.setZoom(ZOOM_MIDDLE_VIEW);
  };

  function addEventListener(eventName, listener) {
    mapObservers.push({ eventName, listener });
  }

  return {
    addPoints,
    findNewPoints,
    zoomTo,
    addEventListener,
  };
}

//-----------------------------------
