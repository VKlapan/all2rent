import { points, appartments } from './points';

export class ModelObjectHandler {
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

  getVisiblePoints = (latMin, latMax, lngMin, lngMax) => {
    console.log(latMin, latMax, lngMin, lngMax);

   return points.reduce((arrVisiblePointId, point) => {
      if (point.lng > lngMin &&
        point.lng < lngMax &&
        point.lat > latMin &&
        point.lat < latMax) {
          arrVisiblePointId.push(point.id);
      }
     return arrVisiblePointId;
  }, []);
}

//point.lat > latMin && point.lat < latMax;
