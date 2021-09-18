const add = value => value + 10;
const square = value => value ** 2;
const half =value => value/2

export const compose = (...funcs)=> value => {
return funcs.reduce((acc, func) => func(acc), value)
};

const doEverything = compose(
  add,
  square,
  half,
)
console.log(doEverything(2))