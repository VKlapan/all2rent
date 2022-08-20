import { MarkerClusterer } from '@googlemaps/markerclusterer';

export function createMap(container) {
  const map = new google.maps.Map(container, {
    zoom: 16,
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

  const observers = [];

  const addPoints = points => {
    const markers = points.map(({ id, lat, lng }) => {
      const label = id.toString();

      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
      });

      marker.addListener('click', mapsMouseEvent => {
        console.log('CLICK!!!', marker.label, map.zoom);
        map.setZoom(18);
        map.setCenter(marker.position);
      });

      return marker;
    });

    new MarkerClusterer({ markers, map });
  };

  map.addListener('bounds_changed', boundsChanged);

  function boundsChanged() {
    for (let i = 0; i < observers.length; i++) {
      if (observers[i].eventName === 'bounds_changed') {
        observers[i].listener(map.getBounds().toJSON());
      }
    }
  }

  function addEventListener(eventName, listener) {
    observers.push({ eventName, listener });
  }

  function removeEventListener(eventName, handler) {}

  return {
    addPoints,
    searchPoint: () => Promise.reject('Not implemented'),
    zoomTo: () => {},
    addEventListener,
    removeEventListener,
  };
}

//-----------------------------------
