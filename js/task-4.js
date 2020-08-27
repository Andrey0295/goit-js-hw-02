function formatString(string, maxLength = 40) {
  string = string.split('');
  if (string.length > maxLength) {
    for (let i = 0; i < string.length; i += 1) {
      if (i === maxLength) {
        string[i] = '...';
      } else if (i > maxLength) {
        string[i] = '';
      }
    }
  }
  return string.join('');
}
// 1.Вывести сумму символов в строке
// 2.Научиться оставлять нужное количество символов.
//    2.1 Использовать значение для метода length.
// 3.Попробовать if(Если str > чем maxLength, то string нужно обрезать)

// 4.Добавить "..." с помощью шаблонной строки

// let string = 'Hello world';
// let str = string.split('');
// console.log(str.length);

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'

// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40)
// которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength,
//   функция возвращает ее в исходном виде.
// Если длина больше maxLength,
//   то функция обрезает строку до размера maxLength
// символов и добавляет в конец строки троеточие ...,
// после чего возвращает укороченную версию.

// const string = 'Hello my dear friend';
// let str = string.split(' ').join('').length;

// console.log(str);
