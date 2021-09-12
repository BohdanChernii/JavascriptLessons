const vehicle = {
 
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stoped`);
  },
};

const ship = {
  name: "Argo",
  age: 21,
  liftAnchorUp() {
    `${this.name} lifting anchor up`;
  },
  liftAnchorDown() {
    `${this.name} lifting anchor down`;
  },
  startMachine() {
    this.liftAnchorUp();
    this.move();
  },
  stopMachine() {
    this.stop();
    this.liftAnchorDown();
  },
};
Object.setPrototypeOf(ship, vehicle )

 function getOwnProps() {
  const res = [];
  for (let prop in ship) {
    if (ship.hasOwnProperty(prop) && typeof(ship[prop]) !== 'function') {
      res.push(prop);
    }
  }
  return res;
}
console.log(getOwnProps(ship))