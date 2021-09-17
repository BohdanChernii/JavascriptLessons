localStorage.setItem("Name", JSON.stringify({ name: "Bohdan" }));
localStorage.setItem("Age", JSON.stringify({ age: 20 }));
localStorage.setItem("Smaking", JSON.stringify({ smaking: false }));
localStorage.setItem("Capital", JSON.stringify({ capital: null }));

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;  
    try{
        newValue = JSON.parse(value)
      }catch(e){
        newValue = value;
      }
    return { ...acc, [key]: newValue };
  }, {});
};

console.log(getLocalStorageData());
