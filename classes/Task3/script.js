class Wallet {
  _balance = 0;
  getBalance (){
    return this._balance;
  }
  deposit(amount){
    this._balance+= amount;
  }
  withdraw(amount){
    if(amount>this._balance){
      console.log(`No enough funds`)
      return
    }
    this._balance -= amount;
  }
}
const wallat1 = new Wallet();
console.log(wallat1.getBalance());
wallat1.deposit(45)
console.log(wallat1.getBalance())
wallat1.withdraw(20);
console.log(wallat1.getBalance())
wallat1.withdraw(100)




