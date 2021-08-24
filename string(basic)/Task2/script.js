let contacts = [
    {name:'Robin',
    phoneNumber: 121212121212121},
    {name:'John',
    phoneNumber:111121212},
    {name:'Bran',
    phoneNumber:12212121},
]
const sortContacts = (contacts, sortByboolean) => {
    if(!Array.isArray(contacts)){
        return null
    }
    const result = contacts
    .sort((a,b) => {
         if (sortByboolean === false){
             return b.name.localeCompare(a.name);
            }
       return a.name.localeCompare(b.name);
       
        
       
    })
    return result
}
console.log(sortContacts(contacts,false))