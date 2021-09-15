const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const emailError = document.querySelector(".error-text_email");
const passwordError = document.querySelector(".error-text_password");

const isRequiredEmail = (value) => (value ? undefined : "Required");
const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

const isRequiredPassword = (value) => (value ? undefined : "Required");

const validatorsByfield = {
  email: [isRequiredEmail, isEmail],
  password: [isRequiredPassword],
};

const validate = (fieldName, value) => {
  const validators = validatorsByfield[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};

const onPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);
  passwordError.textContent = errorText;
};
const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
  emailError.textContent = errorText;
};
emailInput.addEventListener("input", onEmailChange);
passwordInput.addEventListener("input", onPasswordChange);

const form = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(form)]
  .reduce((acc, [field, value]) => ({ ...acc, [field]: value })
  ,{});
  alert(JSON.stringify(formData));
};
form.addEventListener("submit", onFormSubmit);

// // так можно получить данные формы - ВАРИАНТ 1:
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// // более простой формат считывания формы - ВАРИАНТ 2:
// // const formData = Object.fromEntries(new FormData(formElem));
