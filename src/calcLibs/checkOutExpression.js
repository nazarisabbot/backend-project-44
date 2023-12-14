// Функция проверки ответа на математическое выражение
const checkOutExpression = (num, str) => {
  // Преобразование ответа пользователя в число
  const answer = Number(str);
  // Разбиение строки с выражением на массив чисел и оператора
  const expession = num.split(' ');

  // Переменная для хранения результата вычислений
  let res = 0;

  // Извлечение чисел и оператора из массива
  const [num1, operator, num2] = expession;

  // Вычисление результата в зависимости от оператора
  switch (operator) {
    case '+':
      res = Number(num1) + Number(num2);
      break;
    case '-':
      res = Number(num1) - Number(num2);
      break;
    case '*':
      res = Number(num1) * Number(num2);
      break;
    default:
      res = null; // Ругался ESlint на отсутсвия default, пришшлось добавить
  }

  // Возвращение объекта с результатами проверки
  return {
    resAnswer: res === answer,
    strAnswer: res,
  };
};

// Экспорт функции checkOutExpression по умолчанию
export default checkOutExpression;
