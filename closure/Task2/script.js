
const createCalculator =  () => {
    let num = 0;
    function add(sum){
        num +=sum;
    }

    function decrease(desc){
        num-=desc;
    }
 
    function reset(){
        num = 0;
    }

     function getMemo(){
       return num ;
    }
    return {
        add,
        getMemo,
        decrease,
        reset
    }
}
const calculator = createCalculator();
const calculatorNext =  createCalculator();
calculator.getMemo(); // 0

calculator.add(3);

console.log(calculator.getMemo()); // 3

calculator.decrease(5);

calculatorNext.add(5);

calculatorNext.getMemo(); // 5

calculator.getMemo(); // -2

calculator.reset();

calculator.getMemo(); // 0

