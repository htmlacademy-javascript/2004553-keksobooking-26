

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


// Получение числа с плавающей запятой
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

// Функция генерация случайных элементов массива
export const getRandomPart = (arr) => {
  const lastIndex = arr.length - 1;
  const valueA =  getRandomPositiveInteger(0, lastIndex);
  const valueB =  getRandomPositiveInteger(0, lastIndex);

  return arr.slice(Math.min(valueA, valueB), Math.max(valueA, valueB));
};

// Функция генерирует случайный элемент из массива
export const getRandomItem = (items) => items[getRandomPositiveInteger(0, items.length - 1)];

// Функция добавления нуля перед однозначными числами в ссылках на изображение
export const formatNumberWithLeadZero = (num) => `${num < 10 ? '0' : ''}${num}`;


