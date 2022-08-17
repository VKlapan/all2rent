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
}
