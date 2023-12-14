// Импорт функции генерации случайного числа из модуля '../evenLibs/generateRandomNum.js'
import randomNumber from '../evenLibs/generateRandomNum.js';

// Функция генерации случайного числа в диапазоне от 0 до 100
const generateNumbers = () => randomNumber(100);

// Экспорт функции generateNumbers по умолчанию
export default generateNumbers;
