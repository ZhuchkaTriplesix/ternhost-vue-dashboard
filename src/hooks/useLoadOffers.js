import { offersCollection } from '../static/offers.js';

export const useLoadOffers = (name) => {
  return offersCollection[name];
};
