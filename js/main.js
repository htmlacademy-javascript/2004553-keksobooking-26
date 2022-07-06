
// Получение случайного целого из диапазона
export const getRandomPositiveInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return getRandomPositiveInteger(Math.abs(min), Math.abs(max));
  }

  if (max < min) {
    return getRandomPositiveInteger(max, min);
  }

  if (max === min) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Получение случайного числа с заданной точностью из диапапзона
export const getRandomPositiveFloat = (min, max, digits = 1) => {
  if (min < 0 || max < 0) {
    return getRandomPositiveFloat(Math.abs(min), Math.abs(max), digits);
  }

  if (max < min) {
    return getRandomPositiveFloat(max, min, digits);
  }

  if (max === min) {
    return parseFloat(min.toFixed(digits));
  }

  const result = Math.random() * (max - min) + min;
  return parseFloat(result.toFixed(digits));
};


// Домашка


const TypeOfHousing = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const PriceRange = {
  MIN: 1000,
  MAX: 5000,
};

const RoomsRange = {
  MIN: 1,
  MAX: 10,
};

const GuestRange = {
  MIN: 1,
  MAX: 20,
};

const CHECKIN_TIMES = ['12:00','13:00','14:00'];

const CHECKOUT_TIMES = ['12:00','13:00','14:00'];

const descriptionRoom = 'Уютное просторное светлое помещение,на верхних этажах здания с панорамными окнами и видом на большой город.';

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
];

const getRandomPart = (arr) => {
  const lastIndex = arr.length - 1;
  const valueA =  getRandomPositiveInteger(0, lastIndex);
  const valueB =  getRandomPositiveInteger(0, lastIndex);

  return arr.slice(Math.min(valueA, valueB), Math.max(valueA, valueB));
};

const COORD_AMOUNT = 5;
const LatRang = {
  MIN: 35.65,
  MAX: 35.7,
};

const LngRang = {
  MIN: 139.7,
  MAX: 139.8,
};

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const formatNumberWithLeadZero = (num) => `${num < 10 ? '0' : ''}${num}`;

const getRandomOffer = (_item, i) =>  {

  const index = i + 1;
  const location = {
    lat: getRandomPositiveFloat(LatRang.MIN,LatRang.MAX,COORD_AMOUNT),
    lng: getRandomPositiveFloat(LngRang.MIN,LngRang.MAX,COORD_AMOUNT)
  };

  return {
    offer: {
      title: 'Этот вариант вам точно подойдет!',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(PriceRange.MIN,PriceRange.MAX),
      type: TypeOfHousing[getRandomPositiveInteger(0,TypeOfHousing.length-1)],
      rooms: getRandomPositiveInteger(RoomsRange.MIN,RoomsRange.MAX),
      guest: getRandomPositiveInteger(GuestRange.MIN,GuestRange.MAX),
      checkin: CHECKIN_TIMES[getRandomPositiveInteger(0,CHECKIN_TIMES.length-1)],
      checkout: CHECKOUT_TIMES[getRandomPositiveInteger(0,CHECKOUT_TIMES.length-1)],
      description: descriptionRoom,
      photos: getRandomPart(PHOTOS),
      features: getRandomPart(FEATURES),
    },

    author: {
      avatar: `img/avatars/user${formatNumberWithLeadZero(index)}.png`
    },
    location
  };
};

const OFFERS_COUNT = 10;
export const offers = Array.from({length: OFFERS_COUNT}, getRandomOffer);

