export const squaredNumbers = () => {
 const list = Array.from(document.querySelectorAll('li')).map((el)=>{
   return el.dataset.squaredNumbers = el.dataset.number**=2;
 })
}
