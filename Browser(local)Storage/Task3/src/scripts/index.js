import { renderTasks } from './render.js';

const listElem = document.querySelector(".list");
const taskInput = document.querySelector(".task-input");
const button = document.querySelector(".create-task-btn");
const tasks = [];
const generateId = () => Math.random().toFixed(4) * 10000;

const addNewEL = () => {
  if(taskInput.value === ''){
    return false;
  }
  tasks.push({ text: taskInput.value, done: false, id: generateId() });
  taskInput.value = '';
  const taskList = getItem('taskList') || [];
  renderTasks(tasks);
};
button.addEventListener("click", addNewEL);
const checkCheckbox = (event) => {
  const item = event.target;
  if (!item.classList.contains("list__item-checkbox")) {
    return false;
  }
  const itemId = item.closest("li").dataset.id; // here we getting id of li as string

  tasks.map((el) => {
    if (el.id === parseInt(itemId)) {
      // here we parsing itemId because it is string and we need number
      el.done = item.checked; // changing field done in object
    }
  });
  setItem('taskList', tasks)
  renderTasks(tasks); // re rendering updated list
};

listElem.addEventListener("click", checkCheckbox);
const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}
 const getItem = (key) => JSON.parse(localStorage.getItem(key));

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandler();
})