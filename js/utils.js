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


// Создает функцию генерации DOM-узла заполненного контентом.
export const getElementFiller = (template) => (selector, data, createChildElement) => {
  const element = template.querySelector(selector);
  const content = data.toString();

  if (Array.isArray(data) && data.length) {
    if (typeof createChildElement === 'function') {
      element.innerHTML = '';
      data.forEach((item) => {
        element.append(createChildElement(item));
      });
    } else {
      element.textContent = data.join(', ');
    }
  } else if (content) {
    element.textContent = content;
  } else {
    element.remove();
  }
};

const PLURAL_THRESHOLD = 5;

// Выбор словоформы по значению числа
export const getWordAfterNum = (num, [form1, form2 = form1, form3 = form2]) => {
  const lastDigit = num % 10;

  if (num % 100 - lastDigit === 10 || lastDigit >= PLURAL_THRESHOLD) {
    return form3;
  }

  if (lastDigit === 1) {
    return form1;
  }

  return form2;
};

// Функция активации и деактивации
export const toggleForm = (active, formElement, disabledClassName) => {
  const classMethod = active ? 'remove' : 'add';
  formElement.classList[classMethod](disabledClassName);

  formElement.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = !active;
  });
};
