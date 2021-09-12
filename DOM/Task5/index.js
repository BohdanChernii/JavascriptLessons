export const setTitle = (str) => {
const text = document.querySelector('.title');
return text.textContent = str
}
setTitle('Bohdan Chernii')