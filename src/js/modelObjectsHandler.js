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

  addNewApartment = (id, lat, lng, title, image, description) => {
    const currentPoints = JSON.parse(localStorage.getItem('points'));
    const currentApartments = JSON.parse(localStorage.getItem('apartments'));

    id += 1;

    currentPoints.push({ id, lat, lng });
    currentApartments.push({ id, title, image, description });

    localStorage.setItem('points', JSON.stringify(currentPoints));
    localStorage.setItem('apartments', JSON.stringify(currentApartments));
  };
}

const getPointId = point => point.id;

const isInBounds =
  ({ south, north, west, east }) =>
  ({ lat, lng }) =>
    lng > west && lng < east && lat > south && lat < north;
