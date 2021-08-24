/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData1, userId1) {
 let res1 = {...userData1};
  res1.id = userId1;
  return res1;
}
function addPropertyV2(userData2, userId2) {
  let res2 = {...userData2};
  res2.id = userId2;
  return res2;
}
function addPropertyV3(userData3, userId3) {
  let res3 = Object.assign({}, userData3);
  res3.id = userId3;
  
  return res3;
}
function addPropertyV4(userData4, userId4) {
  let res4 = {...userData4};
  res4.id = userId4;
  return res4;
}

// put your code here

// put your code here

// put your code here

// examples
const user = {
  name: 'Sam',
};
console.log(addPropertyV1(user, '1234567'));  // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234568')); 
console.log(addPropertyV3(user, '1234567')); 
console.log(addPropertyV4(user, '1234567')); 