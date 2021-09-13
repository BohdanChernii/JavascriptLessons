export const finishForm = () => {
  const form = document.querySelector(".login-form");
  const input = document.createElement("input");
input.setAttribute('name','login')

  form.prepend(input);
   let last = Array.from( document.querySelectorAll('input')).pop();
   last.setAttribute('type','password');
};

