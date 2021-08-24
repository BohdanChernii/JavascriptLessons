const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  let res = (Array(length).fill(0).map((random = (element))=>{
   let value =  Math.random()*(to- from ) + from;
  
    return Math.round(value);
  }) )
  
  
  return res 
  }
    
    // examples
  console.log(getRandomNumbers(5, 1.4, 3.22)); 
  getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
  getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
  