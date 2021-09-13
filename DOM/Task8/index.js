export const createButton = (buttonText) => {
const button = document.createElement('button');
const body = document.querySelector('body');
button.textContent = buttonText;
body.append(button);
}
