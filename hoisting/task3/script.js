//input num
//out arr
// function  createArrayofFunctions (num) {
//     if(!num){
//         return [];
//     }
//     if(typeof(num) !== 'number'){
//         return null
//     }
//     let arr = [];
//     for (let i = 0; i<num; i++){
//         arr[i] = function (){
//             return i
//         }
//     }
//     return arr;
// }
// console.log(createArrayofFunctions(10))
function  createArrayOfFunctions (num) {
    if(!num){
        return [];
    }
    if(typeof(num) !== 'number'){
       return null
    }
    let arr = [];
    for ( let i = 0; i < num; i++) {
      arr[i] = function() {
        return i
      };   
       
    }
  return arr 
}
  console.log(createArrayOfFunctions(10))