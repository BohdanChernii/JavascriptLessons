const checkbox = document.querySelector('.task-status');
function changed (event){
if (!event.target.checked){
    console.log(false) 
};
if (event.target.checked){
    console.log(true) 
};
}

checkbox.addEventListener('change', changed)