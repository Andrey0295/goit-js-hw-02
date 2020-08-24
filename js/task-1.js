const getItemsString = function (array) {
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// const result = `${logItems}- ${logName}`;
// console.log(result);
// for (let client of clients) {
//   console.log(`Number: ${client}`);
// }
// for (let result = 1; result <= 5; result += 1) {
//   console.log(result);
// }
// console.log(clients[i]);
// console.log(`$[peach] ,clients[i]`);
// console.log(clients);
