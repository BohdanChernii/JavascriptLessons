const shmoment = (date) => {
  let result = new Date(date);
  const calc = {
    add(str, number) {
      switch (str) {
        case "milliseconds":
          result.setMilliseconds(result.getMilliseconds() + number);
          return this;
        case "seconds":
          result.setSeconds(result.getSeconds() + number);
          return this;
        case "minutes":
          result.setMinutes(result.getMinutes() + number);
          return this;
        case "hours":
          result.setHours(result.getHours() + number);
          return this;
        case "days":
          result.setDate(result.getDate() + number);
          return this;
        case "months":
          result.setMonth(result.getMonth() + number);
          return this;
        case "years":
          result.setFullYear(result.getFullYear() + number);
          return this;
        default:
          return null;
      }
    },
    subtract(str, number) {
      switch (str) {
        case "milliseconds":
          result.setMilliseconds(result.getMilliseconds() - number);
          return this;
        case "seconds":
          result.setSeconds(result.getSeconds() - number);
          return this;
        case "minutes":
          result.setMinutes(result.getMinutes() - number);
          return this;
        case "hours":
          result.setHours(result.getHours() - number);
          return this;
        case "days":
          result.setDate(result.getDate() - number);
          return this;
        case "months":
          result.setMonth(result.getMonth() - number);
          return this;
        case "years":
          result.setFullYear(result.getFullYear() - number);
          return this;
        default:
          return null;
      }
    },
    result() {
      return result;
    },
  };
return calc
};
console.log(shmoment(new Date(2021,10,5,11)).add("years", 5).add('hours', 500).result());
