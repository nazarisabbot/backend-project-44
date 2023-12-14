// Функция для генерации случайного числа в заданном диапазоне
// Параметры по умолчанию: min = 1, max = 50
function randomNumber({ min = 1, max = 50 } = {}) {
  // Возврат целого случайного числа в указанном диапазоне
  return Math.floor(min + Math.random() * (max + 1 - min));
}

// Экспорт функции randomNumber по умолчанию
export default randomNumber;
