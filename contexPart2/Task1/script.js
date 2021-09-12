'use strict'

const event = {
    guests : [
        {name:'Kris',age: '11', email: 'example@server.com' },
        {name:'Bodich',age: '18', email: 'example@server.com' },
        {name:'John', age: '18',   email: 'example@server.com'},
   
    ],
    message: `Welcome to the party!`,
    getInvitations(){
        return this.guests
        .filter(({age}) => age >= 18)
        .map(({ name, email})=>({
        email : `${email}`,
        message : `Dear ${name}! ${this.message}`, 
     
        }));
    }
}
console.log(event.getInvitations())