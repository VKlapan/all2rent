import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { ModelObjectHandler } from './modelObjectsHandler';

const model = new ModelObjectHandler();

const locations = model.getAllPoints();
const appartments = model.getAllAppartments();

console.log(model.getAppartmentsByIdArr([2, 4, 10]));

const itemsGalleryEl = document.querySelector('.item--list');

const btnAddNewAppartmentEl = document.querySelector('.header--btn');

const renderFormToAddNewAppartment = () => `
<div class="form__wrap">
  <h3 class="form__title">Додайте новий об'єкт</h3>
  <form class="form__body">
    <label class="form__label">
      <span class="form__text">Адреса</span>
      <input class="form__field" type="text" name="title" placeholder=" " />
    </label>

    <label class="form__label">
      <span class="form__text">Посилання на фото</span>
      <input class="form__field" type="text" name="image" placeholder=" " />
    </label>

    <label class="form__label">
      <span class="form__text">Опис</span>
      <textarea
        class="form__field form__field--textarea"
        name="comments"
        placeholder=" "
        cols="30"
        rows="10"
      ></textarea>
    </label>

    <button class="form__button" type="submit">Додати</button>
  </form>
</div>
`;

const addFromToAddNewAppartment = () => {
  console.log('ADD FORM');
  itemsGalleryEl.innerHTML = renderFormToAddNewAppartment();
};

btnAddNewAppartmentEl.addEventListener('click', addFromToAddNewAppartment);

const renderItemsGallery = appartmentsArr => {
  return appartmentsArr
    .map(appart => {
      return `
    <li class="item" data-id="${appart.id}">
    <img class="item--img" src="${appart.image}" alt="" />
    <div class="item--details">
      <h3 class="item--title">${appart.title}</h3>
      <p class="item--description">${appart.description}</p>
    </div>
  </li>
    `;
    })
    .join('');
};

// itemsGalleryEl.innerHTML = renderItemsGallery(model.getAppartmentsByIdArr([2]));

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

  map.addListener('click', mapsMouseEvent => {
    console.log(mapsMouseEvent.latLng.toJSON());
  });

  map.addListener('bounds_changed', () => {
    const visibleArr = model.getVisiblePointsId(map.getBounds().toJSON());

    //console.log('visible', visibleArr);

    itemsGalleryEl.innerHTML = renderItemsGallery(
      model.getAppartmentsByIdArr(visibleArr)
    );
  });

  const infoWindow = new google.maps.InfoWindow();
  // Create an array of alphabetical characters used to label the markers.
  const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Add some markers to the map.
  const markers = locations.map(({ id, lat, lng }) => {
    //    const label = labels[i % labels.length];
    const label = id.toString();

    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener('click', mapsMouseEvent => {
      // infoWindow.setContent(marker.title);
      // infoWindow.open(map, marker);
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

window.initMap = initMap;
