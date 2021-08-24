const getAdults = (obj) => {
const usersArr = Object.entries(obj);
const filterArr = usersArr.filter(user => user[1] >= 18);
const ToArr = filterArr.map(user => user[0]);
return ToArr 
}
// examples
console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 })); // ==> { a: 1, c: 3 }
