export const mult = a => b => a*b;
const a = mult(7)
let b = a(5);
console.log(b)
export const twice = a => a * 2;
b = a(7)
console.log(b)
export const triple = a => a * 3;
b = a(9)
console.log(b)