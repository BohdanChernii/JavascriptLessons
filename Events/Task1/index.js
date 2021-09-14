const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const add = document.querySelector(".attach-handlers-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const reset = document.querySelector(".clear-btn");
const eventsListElem = document.querySelector(".events-list");

const logTarget = (text, color) => {
  const createSpanElement = document.createElement("span");
  createSpanElement.style = `color: ${color}; margin-left: 8px;`;
  createSpanElement.textContent = text;
  eventsListElem.appendChild(createSpanElement);
};

function resetField() {
  eventsListElem.innerHTML = "";
} 

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreyDiv = logTarget.bind(null, "DIV", "grey");

const logGreenP = logTarget.bind(null, "P", "green");
const logGreyP = logTarget.bind(null, "P", "grey");

const logGreenSpan = logTarget.bind(null, "SPAN", "green");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

function removeHandlers () {
  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreenSpan);

  divElem.removeEventListener("click", logGreyDiv, true);
  pElem.removeEventListener("click", logGreyP, true);
  spanElem.removeEventListener("click", logGreySpan, true);
};

function  attachHandlers () {
  divElem.addEventListener("click", logGreenDiv);
  divElem.addEventListener("click", logGreyDiv, true);
  pElem.addEventListener("click", logGreenP);
  pElem.addEventListener("click", logGreyP, true);
  spanElem.addEventListener("click", logGreenSpan);
  spanElem.addEventListener("click", logGreySpan, true);
}


reset.addEventListener("click", resetField);
removeBtn.addEventListener("click", removeHandlers);
add.addEventListener("click", attachHandlers);


document.addEventListener("DOMContentLoaded", () => {
  attachHandlers();
});
