const checkbox = document.querySelector('.task-status');
function changed (){
if (!checkbox.checked){
    console.log(false) 
};
if (checkbox.checked){
    console.log(true) 
};
}

checkbox.addEventListener('change', changed)
