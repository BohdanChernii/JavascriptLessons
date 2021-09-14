const button = document.querySelector('.single-use-btn')
function events () {
    console.log('clicked')
    button.removeEventListener('click',events)
}

const add = button.addEventListener('click', events)

