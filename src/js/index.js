import { ModelObjectHandler } from './modelObjectsHandler';
import * as Form from './formHandler';
import { createMap } from './createMap';
import { Gallery } from './createGallery';
import { Form } from './createForm';

function main() {
  const model = new ModelObjectHandler();
  model.initModel();

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
