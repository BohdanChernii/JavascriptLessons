const parseUser = str => {
try {
return JSON.parse(str)
}catch{
return null
}
}
console.log(parseUser('{"name":"Bohdan"}'))