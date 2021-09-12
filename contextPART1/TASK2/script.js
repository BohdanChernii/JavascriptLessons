const callbackPrompt = {
    message : 'Show me your number',
    showPrompt(){
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferedPrompt(ms){
        setTimeout(this.showPrompt.bind(this), ms)
    }
}
callbackPrompt.showDeferedPrompt(1000);
callbackPrompt.showDeferedPrompt(0);
callbackPrompt.showDeferedPrompt();