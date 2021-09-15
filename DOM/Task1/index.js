const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input')
const button = document.querySelector('.create-task-btn')
 const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const addNewEL = () => {
  tasks.push({ text:taskInput.value, done: false })
  renderTasks(tasks)
}
button.addEventListener('click',addNewEL)

const checkCheckbox = (event) => {
if(!event.target.classList.contains('list__item-checkbox')){
return false
}  
}
listElem.addEventListener('click', checkCheckbox)

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);



 
