const calc = (intialValue) => {
  let result = intialValue;

  const obj = {
    add(number) {
      result += number;
      return this;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };
  return obj;
};
console.log(calc(3).add(2).subtract(1).div(2).result())
