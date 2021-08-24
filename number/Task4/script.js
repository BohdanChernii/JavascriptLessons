const getMaxAbsoluteNumber = number => {
    if(number.length === 0)  {
        return null
    }if(!Array.isArray(number)){
        return null
    }
let result = number
.map(num =>Math.abs(num));
const max = Math.max(...result);
return max;
}

 
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]))


