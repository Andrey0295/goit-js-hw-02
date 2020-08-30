function mapArray(array) {
  'use strict';
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    //
    numbers[i] = array[i] * 10;
    // numbers = array[i].push * 10;
  }
  return numbers;
}
console.log(mapArray([1, 2]));
console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
const array = [];
console.log(array);
let newArray = array.concat(1, 2, 3);
console.log(newArray[1] * 10);
let example = newArray[2] * 10;
console.log(example);
