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
  liftAnchorUp(){
    console.log(`${this.name} lifting anchor up`);
  },
  liftAnchorDown(){
    console.log(`${this.name} lifting anchor down`);
  },
  startMachine() {
    ship.liftAnchorUp();
    ship.move();

  },
  stopMachine() {
    ship.stop();
    ship.liftAnchorDown();
  },
};

Object.setPrototypeOf(ship, vehicle )
ship.startMachine();
ship.stopMachine();