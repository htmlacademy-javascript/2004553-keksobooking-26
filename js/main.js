import { getOffers } from './offer-data.js';
import { generateCard } from './offer-card-gen.js';
import { toggleAdForm } from './ad-form.js';
import { toggleMapFilters } from './map-filters.js';

const WAIT_TIME = 1000;
const OFFERS_COUNT = 1;

toggleAdForm();
toggleMapFilters();

setTimeout(() => {
  getOffers(OFFERS_COUNT).forEach((offer) => {
    document.querySelector('#map-canvas').append(generateCard(offer));
  });

  toggleAdForm(true);
  toggleMapFilters(true);
}, WAIT_TIME);
