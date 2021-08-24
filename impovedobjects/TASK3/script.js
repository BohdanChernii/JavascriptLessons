function getKeys(obj) {
    const key = Object.keys(obj);
for(let i = 0; i<key.length; i++){
  console.log(key[i]);
}

}
console.log(getKeys({name: 'Bohdan', age: 20,}));
