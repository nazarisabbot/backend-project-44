// Функция проверки ответа на НОД (наибольший общий делитель) двух чисел
const checkOutGcd = (num, str) => {
  // Преобразование ответа пользователя в число
  const answer = Number(str);
  // Разбиение строки с выражением на массив чисел
  const expession = num.split(' ');

  // Извлечение двух чисел из массива
  const [num1, num2] = expession;

  // Функция для нахождения НОД двух чисел
  const findGcd = (a, b) => {
    let tempA = a;
    let tempB = b;
    while (tempB) {
      const temp = tempB;
      tempB = tempA % tempB;
      tempA = temp;
    }
    return tempA;
  };

  // Вычисление НОД двух чисел
  const res = +findGcd(num1, num2);

  // Возвращение объекта с результатами проверки
  return {
    resAnswer: res === answer,
    strAnswer: res,
  };
};

// Экспорт функции checkOutGcd по умолчанию
export default checkOutGcd;
