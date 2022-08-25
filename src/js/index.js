import { ModelObjectHandler } from './modelObjectsHandler';
import { createMap } from './createMap';
import { Gallery } from './createGallery';
import { Form } from './createForm';
import { App } from './app';

function main() {
  const model = new ModelObjectHandler();
  model.initModel();

  const app = new App('.app');
  app.initApp();

  const map = createMap(app.getRootMap());
  const gallery = new Gallery('.item__list');
  const form = new Form('.form__block');

  const buttonToAddNewApartment = app.getButtonToAddNewApartment();
  buttonToAddNewApartment.addEventListener('click', () => {
    form.openForm();
    gallery.hideGallery();
  });

  map.addPoints(model.getAllPoints());

  function onBoundsChange(bounds) {
    const visiblePoints = model.getVisiblePointsId(bounds);
    gallery.showApartments(model.getApartmentsByIdArr(visiblePoints));
  }

  map.addEventListener('bounds_changed', onBoundsChange);

  // отказаться от Буфера. каждому шагу свой зен. передавать коордтнаты в скрытое поле формы

  const prepareNewApartmentForm = newPointCoordinates => {
    form.saveFoundedCoordinates(newPointCoordinates);
    form.openFormAfterSearch();
  };

  const searchOnMap = title => {
    const fields = ['name', 'geometry'];
    map
      .findNewPoints({ fields, query: title })
      .then(prepareNewApartmentForm)
      .catch(form.showErrorSearch);
  };

  const submitNewApartment = ({ lat, lng, title, image, description }) => {
    model.addNewApartment(
      model.getLastPointId(),
      lat,
      lng,
      title,
      image,
      description
    );

    form.hideFormAfterSearch();
    form.hideForm();

    gallery.openGallery();
    gallery.showApartments(model.getApartmentById(model.getLastPointId()));
  };

  form.renderFormToAddNewApartment(searchOnMap, submitNewApartment);
}

window.main = main;
//window.initMap = initMap;
