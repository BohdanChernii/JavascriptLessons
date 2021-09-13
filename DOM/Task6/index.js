export const setButton = (buttonText) =>{
const bodyDocument = document.querySelector('body');
body.textContent = buttonText;
const button = document.createElement('button');
button.innerHTML = buttonText;
bodyDocument.append(button)

}
