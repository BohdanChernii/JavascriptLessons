const input = document.querySelector('.text-input');
function getText (event) {
  console.log(event.target.value);
}
input.addEventListener('change', getText, false);

