function sumOfSquares(){
  return [...arguments].map((el)=>{
    return el ** 2
  }).reduce((el,acc)=>{
    return acc + el;
  },0)
}

console.log(sumOfSquares(2, 4, 1, 3, 9));