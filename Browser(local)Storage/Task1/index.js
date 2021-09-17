localStorage.setItem('Name', JSON.stringify({name:'Bohdan'}))
localStorage.setItem('Age', JSON.stringify({age:20}))
localStorage.setItem('Smaking', JSON.stringify({smaking:false}))
localStorage.setItem('Capital', JSON.stringify({capital:null}))
console.log(JSON.parse(localStorage.getItem('Name')))
console.log(JSON.parse(localStorage.getItem('Age')))
console.log(JSON.parse(localStorage.getItem('Smaking')))
console.log(JSON.parse(localStorage.getItem('Capital')))
 const getlocalStorageData = () => {
return Object.entries(localStorage).reduce((acc, [key, value])=>{
     
    return {...acc,[key]: JSON.parse(value),}
},{})
 }
 console.log(getlocalStorageData())
