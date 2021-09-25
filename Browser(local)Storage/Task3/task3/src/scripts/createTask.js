import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import {  getTasksList, createTask } from './tasksGateway.js';

// eslint-disable-next-line consistent-return
export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputElem.value = "";
  const tasksList = getItem("tasksList") || [];

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: (Math.random().toFixed(4) * 10000).toString(),
  };
 createTask(newTask)
  .then(( ) => getTasksList())
  .then(newtasksList => {
    setItem("tasksList",newtasksList)
    renderTasks();
  })
const newtasksList = tasksList.concat()
  setItem("tasksList", newtasksList);

  renderTasks();
};
