function checkForSpam(str) {
  'use strict';
  // 1.Сделать массив строки.
  str = str.split(' ');
  // 2.Создать цикл for of.
  if (str.includes('spam')) {
    str = true;
  }
  return str;
  // 3. Сделать Тернарній оператор (Условие? Выражение 1 : Выражение 2;).
}
console.log(checkForSpam('hello world spam'));

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message),
// принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.
