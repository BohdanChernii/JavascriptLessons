const pickProps = (obj, props) => {
let res = {};
for(let key in obj){
props.forEach(element => {
    if(key === element) res[key] = obj[key];
});
}
return res;
}
// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'd', 'hex'])); // ==> { a: 1, c: 3 }
