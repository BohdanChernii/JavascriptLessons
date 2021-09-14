const button = document.querySelector('.search__btn');
const input = document.querySelector('.search__input')
function showText () {
    console.log(input.value)
} 
button.addEventListener('click',showText)