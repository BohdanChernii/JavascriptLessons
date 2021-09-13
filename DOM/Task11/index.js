export const manageClasses = () => {
  const items = Array.from(document.querySelectorAll('li'))
  items[0].classList.toggle('selected');
  items[1].classList.toggle('selected');
  items[2].classList.toggle('three_done')
  if (items[3].outerHTML.includes("some-class")) {
    items[3].classList.add("another-class");
  }
}
