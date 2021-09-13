export const finishList = () => {
  const list = document.querySelector("ul");
  const lastitem  = document.createElement("li");
  const firstitem  = document.createElement("li");
  const beforeitem = document.createElement("li");
  const afteritem = document.createElement("li");
  afteritem.textContent = 6;
  beforeitem.textContent = 4;
  const listItemElem = document.querySelector('.special');
  listItemElem.after(afteritem);
  listItemElem.before(beforeitem);
  lastitem.textContent = 8;
  list.append(lastitem);
  firstitem.textContent = 1;
  list.prepend(firstitem);
};
