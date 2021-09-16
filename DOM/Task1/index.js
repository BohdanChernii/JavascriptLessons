const listElem = document.querySelector(".list");
const taskInput = document.querySelector(".task-input");
const button = document.querySelector(".create-task-btn");
const checkbox = document.createElement("input");
const tasks = [
  { text: "Buy milk", done: false, id: 1 },
  { text: "Pick up Tom from airport", done: false, id: 2 },
  { text: "Visit party", done: false, id: 3 },
  { text: "Visit doctor", done: true, id: 4 },
  { text: "Buy meat", done: true, id: 5 },
];

const generateId = () => Math.random().toFixed(4) * 10000;
const addNewEL = () => {
  if(taskInput.value === ''){
    return false;
  }
  tasks.push({ text: taskInput.value, done: false, id: generateId() });
  taskInput.value = '';
  renderTasks(tasks);
};
button.addEventListener("click", addNewEL);



const checkCheckbox = (event) => {
  const item = event.target;
  checkbox.checked = true;
  if (!item.classList.contains("list__item-checkbox")) {
    return false;
  }
  const itemId = item.closest("li").dataset.id; // here we getting id of li as string
  tasks.map((el) => {
    if (el.id === parseInt(itemId)) {
   
      // here we parsing itemId because it is string and we need number
      el.done = checkbox.checked; // changing field done in object
    }
  });

  renderTasks(tasks); // re rendering updated list
};
listElem.addEventListener("click", checkCheckbox);




const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.dataset.id = id;

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");

      checkbox.checked = done;
      checkbox.setAttribute("checked", "checked");
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);