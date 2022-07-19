export const OFFERS_COUNT = 10;
export const MAX_PRICE = 100000;
export const housingTypes = {
  palace: {
    title: 'Дворец',
    min: 10000,
  },
  flat: {
    title: 'Квартира',
    min: 1000,
  },
  house: {
    title: 'Дом',
    min: 5000,
  },
  bungalow: {
    title: 'Бунгало',
    min: 0,
  },
  hotel: {
    title: 'Отель',
    min: 3000,
  },
};

export const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
];

export const CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

export const CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

export const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

export const PriceRange = {
  MIN: 1000,
  MAX: 5000,
};

export const RoomsRange = {
  MIN: 1,
  MAX: 10,
};

export const GuestRange = {
  MIN: 1,
  MAX: 20,
};

export const COORD_AMOUNT = 5;

export const LatRange = {
  MIN: 35.65,
  MAX: 35.7,
};

export const LngRange = {
  MIN: 139.7,
  MAX: 139.8,
};

export const DESCRIPTION_OF_ROOM = 'Уютное просторное светлое помещение, на верхних этажах здания с панорамными окнами и видом на большой город.';

export const TITLE_OF_OFFERS = 'Этот вариант вам точно подойдет!';

export const RoomToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};
