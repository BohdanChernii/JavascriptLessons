const buttons = Array.from(document.querySelectorAll('.pagination__page'));
const firstButton = buttons[0];
const secondButton = buttons[1];
const thirdButton = buttons[2];
function getDataAtribute (event) {
    console.log(event.target.getAttribute('data-page-number'));
}
firstButton.addEventListener('click', getDataAtribute)
secondButton.addEventListener('click', getDataAtribute)
thirdButton.addEventListener('click', getDataAtribute)