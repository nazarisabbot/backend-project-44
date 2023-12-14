// Импорт функции генерации случайного числа из модуля '../evenLibs/generateRandomNum.js'
import randomNumber from '../evenLibs/generateRandomNum.js';

// Функция для генерации случайного математического выражения
const randomExpression = () => {
  // Генерация двух случайных чисел
  const firstNum = randomNumber(100);
  const secondNum = randomNumber(100);

  // Массив операторов
  const arrOfOperators = ['+', '-', '*'];

  // Выбор случайного оператора
  const selectedOperator = arrOfOperators[randomNumber({ min: 0, max: 2 })];

  // Возвращение строки с сгенерированным выражением
  return `${firstNum} ${selectedOperator} ${secondNum}`;
};

// Экспорт функции randomExpression по умолчанию
export default randomExpression;
