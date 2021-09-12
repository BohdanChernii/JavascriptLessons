export const getTitleElement = () => {
    const text = document.querySelector('.title');
    console.dir(text.outerHTML)
    return text;
}
getTitleElement()
export const getInputElement = () =>{
    const input = document.querySelector('input');
    input.getAttribute('type','text');
    console.dir(input.outerHTML)
    return input
}
getInputElement()