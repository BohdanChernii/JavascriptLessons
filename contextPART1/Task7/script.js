 const user = {
  firstName:'John',
  lastName:'Doe',
  getFullName: function getFullName(){
    return(`${this.firstName} ${this.lastName}`)
  }
} 

user.getFullName()

user.setFullName =  function setFullName(name) {
  let res = name.split(' ')
  this.firstName = res[0];
  this.lastName = res[1];
  console.log(`${this.firstName} ${this.lastName }`)
}
user.setFullName('John Doe')