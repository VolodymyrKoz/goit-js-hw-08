// Імпортуємо бібліотеку lodash.throttle
import throttle from "./lodash.throttle.js";

import { throttle } from "lodash";

// Usage:
const throttledFunction = throttle(myFunction, 500);


// Отримуємо елементи форми
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Ключ для збереження в локальному сховищі
const STORAGE_KEY = "feedback-form-state";

// Функція для збереження стану форми в локальне сховище
const saveStateToLocalStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

// Функція для заповнення полів форми значеннями з локального сховища
const setStateFromLocalStorage = () => {
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (state) {
    emailInput.value = state.email || "";
    messageInput.value = state.message || "";
  }
};

// Функція для очищення форми та локального сховища
const resetFormAndLocalStorage = () => {
  const state = {
    email: "",
    message: "",
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  emailInput.value = "";
  messageInput.value = "";
  console.log(state);
};

// Додаємо обробник події input до кожного поля форми
emailInput.addEventListener("input", saveStateToLocalStorage);
messageInput.addEventListener("input", saveStateToLocalStorage);

// Перевіряємо стан локального сховища під час завантаження сторінки
setStateFromLocalStorage();

// Додаємо обробник події submit до форми
form.addEventListener("submit", (event) => {
  event.preventDefault();
  resetFormAndLocalStorage();
});
