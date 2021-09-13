export const finishForm = () => {
  const form = document.querySelector(".login-form");
  const input = document.createElement("input");
input.setAttribute('name','login')
input.setAttribute('type','text')

  form.prepend(input);
   let last = Array.from( document.querySelectorAll('input')).pop();
   last.setAttribute('type','password');
};
