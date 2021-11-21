let throttle = require('lodash.throttle');

let email = document.querySelector('input');
let text = document.querySelector('textarea');
let btn = document.querySelector('button');

let storage = {};
const checkInput = throttle(event => {
  storage[event.target.attributes[0].textContent] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storage));
}, 500);

email.addEventListener('input', checkInput);
text.addEventListener('input', checkInput);
btn.addEventListener('click', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  document.querySelector('form').reset();
});

const loadStorage = () => {
  let valid = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!valid) return;
  storage = valid;
  email.value = storage.email;
  text.value = storage.message;
};

loadStorage();
