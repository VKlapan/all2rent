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

  getVisiblePointsId = rectangle =>
    points.filter(isInBounds(rectangle)).map(getPointId);
}

const getPointId = point => point.id;

const isInBounds =
  ({ south, north, west, east }) =>
  ({ lat, lng }) =>
    lng > west && lng < east && lat > south && lat < north;

//point.lat > latMin && point.lat < latMax;

// getVisiblePoints = (latMin, latMax, lngMin, lngMax) => {
//   console.log(latMin, latMax, lngMin, lngMax);

//   return points.reduce((arrVisiblePointId, point) => {
//     if (
//       point.lng > lngMin &&
//       point.lng < lngMax &&
//       point.lat > latMin &&
//       point.lat < latMax
//     ) {
//       arrVisiblePointId.push(point.id);
//     }
//     return arrVisiblePointId;
//   }, []);
// };

// getVisiblePointsId = (latMin, latMax, lngMin, lngMax) => {
//   const isInCoordinates = isInBounds({ latMin, latMax, lngMin, lngMax });

//   return points.filter(isInCoordinates).map(getPointId);
// };
