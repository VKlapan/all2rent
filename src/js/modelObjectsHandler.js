import { points, appartments } from './points';

export class ModelObjectHandler {
  initModel = () => {
    if (JSON.parse(localStorage.getItem('points')) === null) {
      localStorage.setItem('points', JSON.stringify(points));
    }

    if (JSON.parse(localStorage.getItem('appartments')) === null) {
      localStorage.setItem('appartments', JSON.stringify(appartments));
    }
  };

  getAllPoints = () => {
    return JSON.parse(localStorage.getItem('points'));
  };

  getLastPointId = () => {
    const pnts = JSON.parse(localStorage.getItem('points'));
    return pnts[pnts.length - 1].id;
  };

  getAllAppartments = () => {
    return JSON.parse(localStorage.getItem('appartments'));
  };

  getAppartmentById = id => {
    const apparts = JSON.parse(localStorage.getItem('appartments'));
    return apparts[apparts.findIndex(appartment => appartment.id === id)];
  };

  getAppartmentsByIdArr = idArr => {
    return JSON.parse(localStorage.getItem('appartments')).filter(appartment =>
      idArr.includes(appartment.id)
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

  addAppartmentToBuffer = ({ title, image, description }) => {
    this.bufferObj.status = 'READY';
    this.bufferObj.title = title;
    this.bufferObj.image = image;
    this.bufferObj.description = description;
  };

  addNewAppartment = ({ id, lat, lng, title, image, description }) => {
    const pnts = JSON.parse(localStorage.getItem('points'));
    const apparts = JSON.parse(localStorage.getItem('appartments'));

    pnts.push({ id, lat, lng });
    apparts.push({ id, title, image, description });

    localStorage.setItem('points', JSON.stringify(pnts));
    localStorage.setItem('appartments', JSON.stringify(apparts));
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
