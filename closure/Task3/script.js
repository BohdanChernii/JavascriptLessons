//умова
//алгоритм
//погано
//ріфактор

//створити методи з повідомленнями
//створити метод getRecords який буде працювати з рештою методів
//задати сортування
const createLogger = () => {

let arr = [];

  function log(str) {
    arr.push({
      message: str,
      dateTime: new Date(),
      type: 'log',
    })
  }
  function warn(str) {
    arr.push({
      message: str,
      dateTime: new Date(),
      type: 'warn',
    })
  }
  function error(str) {
    arr.push({
      message: str,
      dateTime: new Date(),
      type: 'error',
    })
  }
  

  //має приймати тип логера
  //і якшо співпадає з типом обєrта пушити в res
  //якшо аргументи не задані вивести всі обєкти 
  //потім методом sort b-a по даті

  function getRecord() {
 arr.sort((a,b) => a.dateTime - b.dateTime);
   return arr
  }

  return {
    log,
    warn,
    error,
    getRecord,
  };

};
const logger = createLogger();
logger.getRecord();
logger.log("User logged in");
logger.warn("User try restricted on the site");
logger.error("Uexpected error on the site");
logger.error("Uexpected error on the site");
logger.log("User logged in");
console.log(logger.getRecord());

