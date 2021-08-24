
const countOccurrences = (text, str) => {
    if(str === ''){
        return null
    }
    
    let strSplit = text.split(' ')
    let result = 0;
    for(let i = 0; i<strSplit.length; i++){
        if(strSplit[i] === str){
            result +=1
        }
       
    }
    return result;
  };
  

console.log(countOccurrences('не каждый кто воет воет воет','воет'))