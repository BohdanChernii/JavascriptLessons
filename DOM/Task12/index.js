export const squaredNumbers = () => {
 const list =document.querySelectorAll('.number');
 list.forEach((el)=>{
   const dataValue = el.getAttribute('data-number')
   el.setAttribute('data.squared-numbers' , dataValue*dataValue)
  });
}