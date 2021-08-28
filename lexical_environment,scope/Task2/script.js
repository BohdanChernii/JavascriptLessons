
const createMessenger = () => {
    let message = 'Just learn it'
    let sender = 'Gromcode';
    function sendMessage(name){   
        console.log(`${name}, ${message}! Your ${sender}`)
    }
    function setMessage(text){
        message = text;
    }
    function setSender(send){
        sender = send;
    }
    return{
        sendMessage,
        setMessage,
        setSender,
    };
}
createMessenger();
let message1 = createMessenger();
message1.setMessage('Nice');
message1.setSender('Ramires')
message1.sendMessage('Tom');
let message2 = createMessenger();
message2.setMessage('Good job');
message2.setSender('Bohdan')
message2.sendMessage('Kris')
message2;




