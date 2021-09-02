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
      type: "log",
    });
  }
  function warn(str) {
    arr.push({
      message: str,
      dateTime: new Date(),
      type: "warn",
    });
  }
  function error(str) {
    arr.push({
      message: str,
      dateTime: new Date(),
      type: "error",
    });
  }

  //має приймати тип логера
  //і якшо співпадає з типом обєrта пушити в res
  //якшо аргументи не задані вивести всі обєкти
  //потім методом sort b-a по даті
  
  function getRecords(type) {
    
    if (type) {
     let res = arr.sort((a, b) => b.dateTime - a.dateTime).filter((el) => el.type === type);
     return res
    } 
      return arr.sort((a, b) =>{ 
        return b.dateTime - a.dateTime}) 
    }
  

  return {
    log,
    warn,
    error,
    getRecords,
  };
};
const logger = createLogger();
logger.getRecords();


logger.error("Uexpected error on the site");
logger.log("User logged in");

logger.error("Uexpected error on the site");
logger.error("Uexpected error on the site");
logger.error("Uexpected error on the site");

console.log(logger.getRecords(''));
const logger2 = createLogger();
logger2.getRecords();

logger2.warn("User try restricted on the site");
logger2.error("Uexpected error on the site");
logger2.log("User logged in");
logger2.warn("User try restricted on the site");
logger2.error("Uexpected error on the site");
logger2.error("Uexpected error on the site");
logger2.error("Uexpected error on the site");

console.log(logger2.getRecords());

