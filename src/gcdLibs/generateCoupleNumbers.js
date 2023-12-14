// Импорт функции генерации случайного числа из модуля '../evenLibs/generateRandomNum.js'
import randomNumber from '../evenLibs/generateRandomNum.js';

// Функция генерации двух случайных чисел в диапазоне от 0 до 100
const randomCoupleNumbers = () => {
  // Генерация двух случайных чисел
  const firstNum = randomNumber(100);
  const secondNum = randomNumber(100);

  // Возвращение строки с двумя случайными числами, разделенными пробелом
  return `${firstNum} ${secondNum}`;
};

// Экспорт функции randomCoupleNumbers по умолчанию
export default randomCoupleNumbers;
