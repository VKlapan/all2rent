import { points, appartments } from './points';

export class ModelObjectHandler {
  getAllPoints = () => {
    return points;
  };

  getLastPointId = () => {
    return points[points.length - 1].id;
  };

  getAllAppartments = () => {
    return appartments;
  };

  getAppartmentById = id => {
    return appartments[
      appartments.findIndex(appartment => appartment.id === id)
    ];
  };

  getAppartmentsByIdArr = idArr => {
    return appartments.filter(appartment => idArr.includes(appartment.id));
  };

  getVisiblePointsId = rectangle =>
    points.filter(isInBounds(rectangle)).map(getPointId);

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
