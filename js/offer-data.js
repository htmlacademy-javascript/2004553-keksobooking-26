import {
  housingTypes,
  FEATURES,
  CHECKIN_TIMES,
  CHECKOUT_TIMES,
  PHOTOS,
  PriceRange,
  RoomsRange,
  GuestRange,
  COORD_AMOUNT,
  LatRange,
  LngRange,
  DESCRIPTION_OF_ROOM,
  TITLE_OF_OFFERS,
} from './data.js';

import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomPart,
  getRandomItem,
  formatNumberWithLeadZero
} from './utils.js';

// Функция генерация объектов
const getRandomOffer = (_item, i) =>  {
  const index = i + 1;
  const location = {
    lat: getRandomPositiveFloat(LatRange.MIN, LatRange.MAX, COORD_AMOUNT),
    lng: getRandomPositiveFloat(LngRange.MIN, LngRange.MAX, COORD_AMOUNT),
  };

  return {
    offer: {
      title: TITLE_OF_OFFERS,
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(PriceRange.MIN, PriceRange.MAX),
      type: getRandomItem(Object.keys(housingTypes)),
      rooms: getRandomPositiveInteger(RoomsRange.MIN, RoomsRange.MAX),
      guest: getRandomPositiveInteger(GuestRange.MIN, GuestRange.MAX),
      checkin: getRandomItem(CHECKIN_TIMES),
      checkout: getRandomItem(CHECKOUT_TIMES),
      description: DESCRIPTION_OF_ROOM,
      photos: getRandomPart(PHOTOS),
      features: getRandomPart(FEATURES),
    },

    author: {
      avatar: `img/avatars/user${formatNumberWithLeadZero(index)}.png`
    },

    location,
  };
};

// Функция генерации массива
export  const getOffers = (length = 1) => Array.from({ length }, getRandomOffer);


