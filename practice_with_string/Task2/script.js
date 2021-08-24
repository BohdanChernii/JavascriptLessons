const reverseString = str => { 
    if(typeof(str) !== 'string'){
        return null
    }
    let toArr = str.split('').reverse()
    return toArr.join('');
}
console.log(reverseString(5))