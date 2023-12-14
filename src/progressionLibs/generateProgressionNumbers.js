// Импорт функции генерации случайного числа из модуля '../evenLibs/generateRandomNum.js'
import randomNumber from '../evenLibs/generateRandomNum.js';

// Функция генерации чисел для арифметической прогрессии
const generateProgressionNumbers = () => {
  // Массив для хранения чисел прогрессии
  const resArr = [];
  // Варианты длины прогрессии
  const length = [25, 30, 35];
  // Варианты шага прогрессии
  const stepArr = [2, 3, 4, 5];

  // Выбор случайной длины прогрессии и шага
  const arrayLength = length[randomNumber({ min: 0, max: 2 })];
  const step = stepArr[randomNumber({ min: 0, max: 3 })];

  // Заполнение массива числами арифметической прогрессии
  for (let i = 0; i < arrayLength + 1; i += step) {
    resArr.push(i);
  }

  // Выбор случайного индекса для скрытия числа
  const hideIndex = randomNumber({ min: 0, max: resArr.length - 1 });
  // Замена числа по выбранному индексу на '..'
  resArr.splice(hideIndex, 1, '..');

  // Возвращение строки с числами прогрессии, разделенными пробелами
  return `${resArr.join(' ')}`;
};

// Экспорт функции generateProgressionNumbers по умолчанию
export default generateProgressionNumbers;
