import { createPopup } from './popup.js';

const SERVER = 'https://26.javascript.pages.academy/keksobooking';

const handleFetchError = () => {
  createPopup('ERROR_FETCH');
  return [];
};

const handlePostError = () => {
  createPopup('ERROR_POST');
};

const getData = () => fetch(`${SERVER}/data`, {
  method: 'GET',
  credentials: 'same-origin',
})
  .then((res) => {
    const { ok = false } = res;

    if (ok) {
      return res.json();
    }

    return handleFetchError();
  })
  .catch(handleFetchError);

const postData = (body, handleSuccess) => fetch(SERVER, {
  method: 'POST',
  body,
})
  .then(({ ok }) => {
    createPopup(ok ? 'SUCCESS_POST' : 'ERROR_POST');

    if (ok) {
      handleSuccess();
    }
  })
  .catch(handlePostError);

export { getData, postData };
