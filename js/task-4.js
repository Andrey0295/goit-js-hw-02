// 1.Разбить строку на массив безпробела.
// 2.Создать if с условием(длина массива строки больше, сем мак.длина).
// 3.Создать фор., в котором при строгом равенстве i и макс.длины последним символом становится ...).
// 4.В случае если
// 5. Просим функцию вернуть строку join .

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
