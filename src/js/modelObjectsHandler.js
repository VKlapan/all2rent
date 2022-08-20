import { points, appartments } from './points';

export class ModelObjectHandler {
  findStatus = null;

  setFindStatus = status => {
    this.findStatus = status;
  };

  getFindStatus = () => {
    return this.findStatus;
  };

  getAllPoints = () => {
    return points;
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
}

const getPointId = point => point.id;

const isInBounds =
  ({ south, north, west, east }) =>
  ({ lat, lng }) =>
    lng > west && lng < east && lat > south && lat < north;
