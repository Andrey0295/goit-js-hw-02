function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line
  //   for (i = 0; i < array.length; i += 1) {
  //     total += array[i];
  //   }
  for (const value of array) {
    total += value;
  }
  if (array.length === 0) {
    total === 0;
  }

  return total;
}

// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции: ', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// };

console.log(reduceArray([1, 2]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
const array = [10, 20, 30];
let sum = array[0] + array[1];
console.log(sum);
// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.
// Для подсчета суммы используй переменную total.
// Функция должна возвращать 0 если массив пустой и значение total в противном случае.
