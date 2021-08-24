const getTotalRevenue = transactions => {
    const toArr = Object.assign(transactions)
    let toMap = toArr.flat().map((el)=>{
      return el.amount
    }).reduce((acc, item)=>{
      acc+=item
      return acc
    })
    return toMap
  };
  
  // examples
  const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
  ];
  
  const result = getTotalRevenue(dayTransactions); // ==> 310
  console.log(result)