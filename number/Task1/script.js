const getFiniteNumbers = arr =>{
    let res = arr.filter(el =>{
        if(Number.isFinite(el) === true){
            return el
        }
        
    })
    return res;
}


const getFiniteNumbersV2 = arr =>{
    let res = arr.filter(el =>{
            return isFinite(el)
        
    })
    return res;
}


const getNaN = arr =>{
    let res = arr.filter(el =>{
       return Number.isNaN(el)    
    })
    return res;
}


const getNaNV2 = arr =>{
    let res = arr.filter(el =>{
            return isNaN(el)
        
    })
    return res;
}


const getIntegers = arr =>{
    let res = arr.filter(el =>{
        if(Number.isInteger(el) ){
            return el
        }
        
    })
    return res;
}
console.log(getFiniteNumbers([2.1,Infinity, 3]))
console.log(getFiniteNumbersV2([2.1,Infinity, 3, 1e111111111]))
console.log(getNaN([2.1, Infinity, 3, 'text', NaN]))
console.log(getNaNV2([2.1, Infinity, 3, 'text', NaN,1E12121211]))
console.log(getIntegers([2.1, Infinity, 3, 'text', NaN]))
