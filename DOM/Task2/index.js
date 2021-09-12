export const getTitleElement = () => {
    const text = document.querySelector('.title');
    console.dir(text)
    return text;
}
getTitleElement()
 export const getInputElement = () =>{
    const input = document.querySelector('input');
    input.getAttribute('type','text');
    console.dir(input)
    return input
}
getInputElement()