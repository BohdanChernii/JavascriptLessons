"use strict";

let message = "Just learn it";
const sender = "";
 function sendMessage(name) {
  
  console.log(`${name}, ${message}! Your Gromcode`);
}

function setMessage(text) {
  message = text;
  
}
sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');

