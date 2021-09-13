export const manageClasses = () => {
  const items = Array.from(document.querySelectorAll('li'))
  items[0].classList.toggle('selected');
  items[1].classList.toggle('selected');
  items[2].classList.toggle('three_done')
  items[3].classList.toggle('another_class','some-class')
}