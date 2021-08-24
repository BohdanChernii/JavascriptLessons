// const flatArray = arr => {
//     let res =  [...arr];
//     let arrConcat = res.reduce((acc, num)=>{
//         return acc.concat(num);
//     },[]) 
//     arrConcat;
//     function sompare(a, b){
//         if(a > b){
//             return 1;
//         }
//         return -1
//     }
//     arrConcat.sort(sompare);
//     return arrConcat;
//   };
//   console.log(flatArray([5, [3, 2],[2, 1], 4, [3, 5], 1]))



// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
// let res = allStudentsList.filter(name => !studentsForRetake.includes(name));
// let message = res.map(name => 'Good job, ' + name);
// return message;
// }



// const allStud = ['a', 'b', 'c', 'd'];
// const retakeStud = ['b', 'd'];

// console.log(getMessagesForBestStudents(allStud, retakeStud));

// const squareArray = number =>{
//    if (!Array.isArray(number)){
//        return null;
//    }
//     let result = number.map(square => square ** 2);
//     return result
// };
// console.log(squareArray([2, 4, 5, 6]));


// const filterNames = (arr,text) =>{
//     let res = [...arr];
//     res = arr.filter(item => item.length > 5 && item.includes(text));
//     return res;
// }
// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya' ));

  
// const arrAverage = arr =>{
//     if(!Array.isArray(arr)){
//         return null;
//     }
//    const medium = (acc, element) => acc + element;
//    let res = arr.reduce(medium) / arr.length;
//    return res;
// }
// console.log (arrAverage([2, 5, 6, 3]));







// const withdraw = (clients, balances, client, amount) => {
//     let index = clients.indexOf(client);
//     let result = balances
//        if( balances[index] < amount){

//         return -1
//     }
//     result[index]=balances[index] - amount;
//     return balances[index]
 
// }

// //example 1:

// //input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50));

// //output
// //37
// //и массив balances должен быть [1400, 37, -6]



// //example 2:

// //input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

// //output
// //-1
// //и массив balances должен быть [1400, 87, -6]

const increaseEventEl = (arr, delta) =>{
    if(!Array.isArray(arr)){
        return null;
    }

const sum = arr.map(function(num) {
    let res = [];
if(num % 2 === 0){
 return num + delta;
}
if(num % 2 > 0){
   return num
}
return res.push(num);
})
return sum;


}
console.log(increaseEventEl([1, 4, 9, 16], 20))






