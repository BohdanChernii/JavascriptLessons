const obj = {
  room1: [{ name: "Jack" }, { name: "Bohdan" }, { name: "Uriy" }],
  room2: [{ name: "Kristin" }, { name: "Bohdan" }, { name: "Roman" }],
  room3: [{ name: "Vicktor" }, { name: "Andriy" }, { name: "Oleksandr" }],
};

const getPeople = (obj) => {
  let objToarr = Object.values(obj);
  let toMap = objToarr.flat().map((el) => {
    return el.name;
  });
  return toMap;
};
console.log(getPeople(obj));
