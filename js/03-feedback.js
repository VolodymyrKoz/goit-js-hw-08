import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const updateLocalStorage = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

form.addEventListener("input", throttle(updateLocalStorage, 500));

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (savedData) {
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

const onSubmit = (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem("feedback-form-state");
  emailInput.clear();
  messageInput.clear();
};

form.addEventListener("submit", onSubmit);

