import {getOffers} from './offer-data.js';
import {generateCard} from './data.js';
import { toggleFormElement } from './utils.js';
import { toggleFiltersMap } from './map-filters.js';

const WAIT_TIME = 1000;
const OFFERS_COUNT = 1;

toggleFormElement();
toggleFiltersMap();

setTimeout(() => {
  getOffers(OFFERS_COUNT).forEach((offer) => {
    document.querySelector('#map-canvas').append(generateCard(offer));
  });

  toggleFormElement(true);
  toggleFiltersMap(true);
}, WAIT_TIME);
