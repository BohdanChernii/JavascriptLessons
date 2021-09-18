const calc = (intialValue) => {
  let result = intialValue;

  const obj = {
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return obj;
};
console.log(calc(3).add(2).subtract(1).div(2).result())
