import { ModelObjectHandler } from './modelObjectsHandler';
import { createMap } from './createMap';
import { Gallery } from './createGallery';
import { Form } from './createForm';

function main() {
  const model = new ModelObjectHandler();
  model.initModel();

  const map = createMap(document.getElementById('map'));
  const gallery = new Gallery('.item__list');
  const form = new Form('.form__block');

  // btn -> button + ENG rule - "El"
  //document.querySelector + -- __

  const btnAddNewAppartmentEl = document.querySelector('.header--btn');
  btnAddNewAppartmentEl.addEventListener('click', form.openForm);
  btnAddNewAppartmentEl.addEventListener('click', gallery.hideGallery);

  map.addPoints(model.getAllPoints());

  function onBoundsChange(bounds) {
    const visiblePoints = model.getVisiblePointsId(bounds);
    gallery.showAppartments(model.getAppartmentsByIdArr(visiblePoints));
  }

  map.addEventListener('bounds_changed', onBoundsChange);

  // отказаться от Буфера. каждому шагу свой зен. передавать коордтнаты в скрытое поле формы

  const prepareNewPointAndNewAppartmentForm = newPointCoordinates => {
    model.initBuffer(model.getLastPointId(), newPointCoordinates);

    form.openFormAfterSearch();
  };

  const searchOnMap = title => {
    const fields = ['name', 'geometry'];
    map
      .findNewPoints({ fields, query: title })
      .then(prepareNewPointAndNewAppartmentForm)
      .catch(form.showErrorSearch);
  };

  const prepareNewAppartment = ({ title, image, description }) => {
    model.addAppartmentToBuffer({ title, image, description });
    model.addNewAppartment(model.bufferObj);

    form.hideFormAfterSearch();
    form.hideForm();

    gallery.openGallery();
    gallery.showAppartments(model.getAppartmentById(model.bufferObj.id));
  };

  form.renderFormToAddNewAppartment(searchOnMap, prepareNewAppartment);
}

window.main = main;
//window.initMap = initMap;
