const text = document.querySelector('.text-input');
function  change () {
    console.log(text.value)//добули значення інпута
}
text.addEventListener('change', change)//івент, функція