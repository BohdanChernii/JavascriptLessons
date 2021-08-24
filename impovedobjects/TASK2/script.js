const copyObj = obj =>{
    let res = {...obj}
    return res
}
console.log(copyObj({name: 'Bohdan', age: 20,}))
