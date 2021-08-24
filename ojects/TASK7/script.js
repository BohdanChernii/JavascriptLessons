const getAdults = (obj) => {
let res = {};
for(let value in obj){
    if(obj[value] >= 18){ 
        res[value] = obj[value]
    }
}
return res;
}
// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { a: 1, c: 3 }
