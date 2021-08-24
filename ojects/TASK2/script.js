//learn what they want from you.
//algorithm
//draft
//do better
const concatProps = obj => {
  let arr = [];
  for(let key in obj){
  
  arr.push(obj[key]);
  }
  return arr;
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
console.log(concatProps({ name: 'Johny', age: -17, boolean: false })); // ==> ['John Doe', 17, 'football']