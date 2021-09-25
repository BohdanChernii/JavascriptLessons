const url = "https://614b503de4cc2900179eb033.mockapi.io/registrationForm";
const emailInputElement = document.querySelector("#email");
const nameInputElement = document.querySelector("#name");
const passwordInputElement = document.querySelector("#password");

const button = document.querySelector(".submit-button");
const errorText = document.querySelector(".error-text");
const form = document.querySelector(".login-form");

const isValible = () => {
  if (
    emailInputElement.reportValidity() &&
    nameInputElement.reportValidity() &&
    passwordInputElement.reportValidity()
  ) {
    button.disabled = false;
  }
  errorText.textContent = "";
};

const sendData = (formData) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8;",
    },
    body: JSON.stringify(formData),
  });

const submitData = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(form));
  sendData(formData)
    .then((response) => response.json())
    .then((user) => {
      alert(JSON.stringify(user));
      form.reset();
      button.disabled = true;
    })
    .catch(() => (errorText.textContent = "Failed to crete user"));
};

form.addEventListener("input", isValible);
form.addEventListener("submit", submitData);
