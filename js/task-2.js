const calculateEngravingPrice = function (message = '', pricePerWord = 0) {
  return message.split(' ').length * pricePerWord;
};
// Write code in this line

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100

// const calculator = function (mesage = '', cost = 0) {
//   return mesage.split(' ').length * cost;
// };
// console.log(calculator('Hello world i am Gandro', 10));
