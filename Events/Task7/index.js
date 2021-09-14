const buttons = Array.from(document.querySelectorAll('.btn'));
const firstButton = buttons[0];
const secondButton = buttons[1];
function handleClick(event) {
  console.log(event.target.textContent);
}
firstButton.addEventListener("click", handleClick);
secondButton.addEventListener("click", handleClick);
