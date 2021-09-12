class User {
  constructor(id, name, sessionId){
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get sessionId(){
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users){
    this._users = Object.freeze(users);
  }
  get users(){
    return this._users
  }
  getUserNames(){
    return this.users.map((el) => el.name)}
  getUserIds(){
    return this.users.map((el) => el.id)}
  getUserNameById(id){
    return this.users.find((el) => el._id === id)._name
  }
}

const user1 = new User("1", "Name1", "1");
const user2 = new User("2", "Name2", "2");
const user3 = new User("3", "Name3", "3");
const user4 = new User("4", "Name4", "4");
const user5 = new User("5", "Name5", "5");
const arr = [user1, user2, user3, user4, user5]
const newRepo = new UserRepository(arr);
console.log(newRepo);
console.log(newRepo.getUserNames());

