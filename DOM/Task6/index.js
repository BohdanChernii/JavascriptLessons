export const setButton = (buttonText) =>{
const bodyDocument = document.querySelector('body');
bodyDocument.textContent = buttonText;
const button = document.createElement('button');
button.innerHTML = buttonText;
bodyDocument.append(button)
}
setButton('button text')