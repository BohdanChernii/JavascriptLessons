class Vehicle {
  constructor (name, numberOfWheeles){
    this.name = name;
    this.numberOfWheeles = numberOfWheeles
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle  {
  constructor (name, maxSpeed){
    super(name,false);
    this.maxSpeed = maxSpeed;
  }
  liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  }
  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  }
  move() {
    this.liftAnchorUp();
    super.move();
  }
  stop() {
    super.stop();
    this.liftAnchorDown();
  }
};
const car = new Vehicle('Auddi', 4)
const board = new Ship ('Aurora', 12)
console.log(board)