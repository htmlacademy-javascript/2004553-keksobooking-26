import { toggleForm } from './utils.js';

const DISABLED_CLASS_NAME = 'map__filters--disabled';
const filtersElement = document.querySelector('.map__filters');

export const toggleMapFilters = (isActive) => {
  toggleForm(isActive, filtersElement, DISABLED_CLASS_NAME);
};
