import { points, apartments } from './points';

export class ModelObjectHandler {
  initModel = () => {
    if (JSON.parse(localStorage.getItem('points')) === null) {
      localStorage.setItem('points', JSON.stringify(points));
    }

    if (JSON.parse(localStorage.getItem('apartments')) === null) {
      localStorage.setItem('apartments', JSON.stringify(apartments));
    }
  };

  getAllPoints = () => {
    return JSON.parse(localStorage.getItem('points'));
  };

  getLastPointId = () => {
    const pnts = JSON.parse(localStorage.getItem('points'));
    return pnts[pnts.length - 1].id;
  };

  getAllApartments = () => {
    return JSON.parse(localStorage.getItem('apartments'));
  };

  getApartmentById = id => {
    const aparts = JSON.parse(localStorage.getItem('apartments'));
    return [aparts[aparts.findIndex(apartment => apartment.id === id)]];
  };

  getApartmentsByIdArr = idArr => {
    return JSON.parse(localStorage.getItem('apartments')).filter(apartment =>
      idArr.includes(apartment.id)
    );
  };

  getVisiblePointsId = rectangle =>
    JSON.parse(localStorage.getItem('points'))
      .filter(isInBounds(rectangle))
      .map(getPointId);

  initBuffer = (lastPointId, { lat, lng }) => {
    this.bufferObj.status = 'PREPAING';
    this.bufferObj.id = lastPointId + 1;
    this.bufferObj.lat = lat;
    this.bufferObj.lng = lng;
  };

  addApartmentToBuffer = ({ title, image, description }) => {
    this.bufferObj.status = 'READY';
    this.bufferObj.title = title;
    this.bufferObj.image = image;
    this.bufferObj.description = description;
  };

  addNewApartment = ({ id, lat, lng, title, image, description }) => {
    const pnts = JSON.parse(localStorage.getItem('points'));
    const aparts = JSON.parse(localStorage.getItem('apartments'));

    pnts.push({ id, lat, lng });
    aparts.push({ id, title, image, description });

    localStorage.setItem('points', JSON.stringify(pnts));
    localStorage.setItem('apartments', JSON.stringify(aparts));
  };

  bufferObj = {
    status: 'EMPTY',
    id: null,
    lat: null,
    lng: null,
    title: '',
    image: '',
    description: '',
  };
}

//STATUS_OF_BUFFER = (EMPTY, PRERAPING, READY);

const getPointId = point => point.id;

const isInBounds =
  ({ south, north, west, east }) =>
  ({ lat, lng }) =>
    lng > west && lng < east && lat > south && lat < north;
