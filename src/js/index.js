import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { ModelObjectHandler } from './modelObjectsHandler';
import * as Form from './formHandler';
import { createMap } from './createMap';
import { Gallery } from './createGallery';
import { Form } from './createForm';

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
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

  console.log('log bounds: ', map.getBounds());

  map.addListener('click', mapsMouseEvent => {
    console.log(mapsMouseEvent.latLng.toJSON());
  });

  map.addListener('bounds_changed', () => {
    console.log('get bounds: ', map.getBounds().toJSON());
    const visibleArr = model.getVisiblePointsId(map.getBounds().toJSON());

    //console.log('visible', visibleArr);

    itemsGalleryEl.innerHTML = Form.renderItemsGallery(
      model.getAppartmentsByIdArr(visibleArr)
    );
  });

  const infoWindow = new google.maps.InfoWindow();

  const markers = locations.map(({ id, lat, lng }) => {
    const label = id.toString();

    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
    });

    marker.addListener('click', mapsMouseEvent => {
      console.log('CLICK!!!', marker.label, map.zoom);
      map.setZoom(18);
      map.setCenter(marker.position);

      const appartByClickMarketEl = document.querySelector(
        `[data-id='${marker.label}']`
      );
      console.log(appartByClickMarketEl);

      appartByClickMarketEl.scrollIntoView(true);
    });
    return marker;
  });

  //console.log(markers);

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });

  // Find new Point to add ---start
  const addFormToAddNewAppartment = () => {
    isGalleryRenderingBlockedWhileSearch = true;
    console.log('ADD FORM');

    const fields = ['name', 'geometry'];

    const onSubmit = formValues => {
      console.log(formValues);

      findNewPoints({ fields, query: formValues.title })
        .then(console.log)
        .catch(console.log);
    };

    Form.renderFormToAddNewAppartment(itemsGalleryEl, onSubmit);
  };

  const findNewPoints = request => {
    return new Promise((resolve, reject) => {
      var service = new google.maps.places.PlacesService(map);

      service.findPlaceFromQuery(request, function (results, status) {
        model.setFindStatus(status);
        // console.log('after set ', model.getFindStatus());

        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }

          map.setCenter(results[0].geometry.location);
          resolve(status);
        } else {
          model.setFindStatus(status);
          reject(status);
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
    });
  };
}

function main() {
  const model = new ModelObjectHandler();
  const map = createMap(document.getElementById('map'));
  const gallery = new Gallery('.item--list');
  const form = new Form('.form-block');

  const btnAddNewAppartmentEl = document.querySelector('.header--btn');
  btnAddNewAppartmentEl.addEventListener('click', form.openForm);
  btnAddNewAppartmentEl.addEventListener('click', gallery.hideGallery);

  map.addPoints(model.getAllPoints());

  function onBoundsChange(bounds) {
    const visiblePoints = model.getVisiblePointsId(bounds);

    gallery.showAppartments(model.getAppartmentsByIdArr(visiblePoints));
  }

  //observer
  map.addEventListener('bounds_changed', onBoundsChange);

  const searchOnMap = formValues => {
    console.log(formValues);
    const fields = ['name', 'geometry'];
    map
      .findNewPoints({ fields, query: formValues.title })
      .then(console.log)
      .catch(console.log);
  };

  form.renderFormToAddNewAppartment(searchOnMap);
}

window.main = main;
//window.initMap = initMap;
