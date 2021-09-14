
const body = document.querySelector('body')
function handleClick(event) {
  console.log(event.target.textContent);
}
body.addEventListener("click", handleClick);
