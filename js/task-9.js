function isLoginValid(login, min = 4, max = 16) {
  return login.length < min || login.length > max ? false : true;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  return allLogins.includes(login) ? false : true;

  // Write code under this line
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line
  if (isLoginValid(login) !== true) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) !== true) {
    message = REFUSAL;
  } else {
    allLogins.push(login);
    message = SUCCESS;
  }
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// 1.Написать функцию, которая проверяет количество символов в логине
// Должно быть 4 - 16 символов.

// 2.Написать функцию, которая принимает список всех логинов
// и добавляемый логин...и проверяет наличие login в массиве allLogins
//     Возвращает true, если такого логина еще нет и false, если он уже используетсяя.

// const array = ['Андрей', 'Сергей', 'Алена', 'Даниил'];
// console.log(array);
// console.log(array[0].length);
