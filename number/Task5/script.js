const getTotalPrice = number => {
let result = number.reduce((acc, element) =>{
    acc += element;
    return acc

})
return '$'+ Math.floor(result*100)/100
}

 
console.log(getTotalPrice([777.5212, 3.13, -14.43, 45.2, -20]))


