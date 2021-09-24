const baseUrl = "https://614b503de4cc2900179eb033.mockapi.io/users";
function getUsersList() {
  return fetch(baseUrl)
  .then((response) => response.json());
}



function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`)
  .then(userData => {
    console.log(userData)
})
}



function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  })
}



function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  })
}



function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(userData),
  })
}updateUser(3, {
    email: 'bodiachernii@gmail.com', firstName: 'Bohdan', lastName: 'Tchernii', age: 20, })
    .then(() => {
    console.log("User updated");
  });;


  getUsersList().then((users) => {
    console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
  });
//   // examples
//   getUsersList().then(users => {
//     console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
//   });

//   getUserById('2').then(userData => {
//     console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
//   });

//   const newUserData = {
//     email: 'cool@email.com',
//     firstName: 'Iron',
//     lastName: 'Man',
//     age: 42,
//   };

//   createUser(newUserData).then(() => {
//     console.log('User created');
//   });

//   const updatedUserData = {
//     email: 'new@email.com',
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 17,
//   };

//   updateUser('1', updatedUserData).then(() => {
//     console.log('User updated');
//   });

//   deleteUser('2').then(() => {
//     console.log('User updated');
//   });
