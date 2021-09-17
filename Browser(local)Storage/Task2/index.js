const  button = document.querySelector('.counter');
const span = document.querySelector('.counter__value');

const getClick = (e) => {
const isbutton = e.target.classList.contains('counter__button')
if(!isbutton){
    return;
}
const action = e.target.dataset.action;

const oldValue = Number(span.textContent)

const newValue = action === 'decrease' 
? oldValue -1 
: oldValue +1
localStorage.clear()
localStorage.setItem('counter', newValue)
span.textContent = newValue;
}

button.addEventListener('click', getClick)

const change = e => {
    span.textContent = e.newValue
}

window.addEventListener('storage',change)