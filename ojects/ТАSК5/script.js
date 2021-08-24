//learn what they want from you.
//algorithm
//draft
//do better
function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
  return obj;
}

console.log(getKeys({ name: "Bohdan", age: 2, "favourrite music": "rock" }));
