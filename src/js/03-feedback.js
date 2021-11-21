let email = document.querySelector("input");
let text = document.querySelector("textarea");
let btn = document.querySelector("button");

let storage = {};
const checkInput = event => {
    storage[event.target.attributes[0].textContent] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(storage));
}

email.addEventListener("input", checkInput);
text.addEventListener('input', checkInput);
btn.addEventListener("click", () => {
    storage = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(storage);
})

 window.onload = function () {
     if (!storage) return;
    storage = JSON.parse(localStorage.getItem('feedback-form-state'));
     email.value = storage.email;
     text.value = storage.text;
 }