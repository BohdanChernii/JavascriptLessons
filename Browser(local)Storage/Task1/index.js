localStorage.setItem('Name', JSON.stringify({name:'Bohdan'}))
localStorage.setItem('Age', JSON.stringify({age:20}))
localStorage.setItem('Smaking', JSON.stringify({smaking:false}))
localStorage.setItem('Capital', JSON.stringify({capital:null}))

 export const getlocalStorageData = () => {
return Object.entries(localStorage).reduce((acc, [key, value])=>{
     
    return {...acc,[key]: JSON.parse(value),}
},{})
 }

