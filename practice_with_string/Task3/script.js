const cleanTransactionsList = arr => { 
let delstr = arr.filter(element =>{
    let toNum = Number (element);
   
     if (typeof(toNum) !== 'NaN'){
        return toNum
     }
    
}).map(element =>{
    let numElement = Number(element)
   
    return '$'+ (Number.parseFloat((numElement *100 )/100).toFixed(2))
})
return delstr;
}
console.log(cleanTransactionsList([' 1.9','16.4','17. ', 'dollar']))