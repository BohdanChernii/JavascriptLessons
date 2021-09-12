function saveCalls (func){
function withMemory (...arg){
  withMemory.calls.push(arg);
  return func.apply(this, arguments);
}
withMemory.calls = []
return withMemory
}
saveCalls()
saveCalls.withMemory
saveCalls.withMemory
saveCalls.withMemory
console.log(saveCalls())