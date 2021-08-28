let num = 0 ;
export function add(sum){
    num +=sum;
}
add(5)
export function decrease(desc){
    num-=desc;
}
decrease(2)
export function reset(){
    num = 0;
}
reset()
 export function getMemo(){
   return num ;
}
getMemo();

console.log(getMemo())