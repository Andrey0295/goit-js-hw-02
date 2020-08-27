// function findLongestWord(string = '') {
//   let str = string.split(' ');
//   let longest = 0;
//   let word = null;
//   for (let i = 0; i < str.length; i += 1) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// }
// console.log(findLongestWord());

function findLongestWord(string = '') {
  let str = string.split(' ');
  let longest = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (longest < str[i].length) {
      longest = str[i].length;
      string = str[i];
    }
  }
  return string;
}
console.log(findLongestWord('Привет как делллаа'));
// 1.Научиться логинить кол-во символов в строке
// 2.Научиться находить ко-во символов в слове(в индексе)
// 3.Научиться находить самое длинное слово
// let longestWord=
