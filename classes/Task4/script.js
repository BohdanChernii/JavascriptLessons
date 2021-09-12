class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.id = String (Math.random().toFixed(4) * 10000);
  }
  checkPrice() {
    return this.price > 1000;
  }
  confirmOrder() {
    this.dateConfirmed = new Date();
    this.isConfirmed = true;
  }
  isValidType(){
    if(this.type === 'Buy'|| this.type === 'Sell'){
      return true;
    }
    return false;
  }
}

