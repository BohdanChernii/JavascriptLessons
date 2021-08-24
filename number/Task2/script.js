const getParsedIntegers = arr =>{
    let res = arr.map(el =>Number.parseInt(el));
    return res;
}


const getParsedIntegersV2 = arr =>{
    let res = arr.map(el =>{
            return parseInt(el)
        
    })
    return res;
}


const getParsedFloats = arr =>{
    let res = arr.map(el =>{
       return Number.parseFloat(el)    
    })
    return res;
}


const getParsedFloatsV2 = arr =>{
    let res = arr.map(el =>{
            return parseFloat(el)
        
    })
    return res;
}



console.log(getParsedIntegers([2.1,Infinity, 3]))
console.log(getParsedIntegersV2([2.1,Infinity, 3, 1e111111111]))
console.log(getParsedFloats ([2.1, Infinity, 3, 'text', NaN]))
console.log(getParsedFloatsV2([2.1, Infinity, 3, 'text', NaN,1E12121211]))
