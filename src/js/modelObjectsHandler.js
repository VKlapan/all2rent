import { points, appartments } from './points';

export class ModelObjectHandler {
  getAllPoints = () => {
    return points;
  };

  getAllAppartments = () => {
    return appartments;
  };
}
