// Функция проверки ответа на простоту числа
const checkOutPrime = (num, str) => {
  // Переменная для хранения информации о простоте числа, изначально считаем число простым
  let primeOrNot = true;

  // Проверки для чисел 1 и 2, они не являются простыми
  if (num === 1 || num === 2) {
    primeOrNot = false;
  }

  // Если число четное (кроме 2), оно не является простым
  if (num % 2 === 0) {
    primeOrNot = false;
  }

  // Проверка делителей от 3 до корня из числа
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      // Если найден делитель, число не является простым
      primeOrNot = false;
    }
  }

  // Сравнение с ответом пользователя и возврат результата
  if ((primeOrNot && str.toLowerCase() === 'yes') || (!primeOrNot && str.toLowerCase() === 'no')) {
    return {
      resAnswer: true,
      strAnswer: 'yes',
    };
  }

  // Обработка различных вариантов ответов пользователя и возврат результата
  if (primeOrNot && str.toLowerCase() === 'no') {
    return {
      resAnswer: false,
      strAnswer: 'yes',
    };
  }

  if (!primeOrNot && str.toLowerCase() === 'yes') {
    return {
      resAnswer: false,
      strAnswer: 'no',
    };
  }

  // Возврат результата по умолчанию
  return {
    resAnswer: false,
    strAnswer: primeOrNot ? 'yes' : 'no',
  };
};

// Экспорт функции checkOutPrime по умолчанию
export default checkOutPrime;
