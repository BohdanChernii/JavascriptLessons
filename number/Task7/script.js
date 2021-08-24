
const superRound = (num, prec) => {
let el = Math.pow (10, prec)
let res = [ 
    Math.floor(num*el)/el, 
    Math.trunc(num*el)/el, 
    Math.ceil(num*el)/el, 
    Math.round(num*el)/el, 
    Number(num.toFixed(prec))
  ]
  return res;
}

console.log(superRound(11.12556, 2))
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
