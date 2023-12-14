// Функция проверки ответа на прогрессию
const checkOutProgression = (num, str) => {
  // Преобразование ответа пользователя в число
  const answer = Number(str);
  // Разбиение строки с выражением на массив чисел и операторов
  const expession = num.split(' ');
  // Получение длины массива
  const { length } = expession;

  let res = null;

  // Поиск индекса '..' в массиве
  const colon = expession.indexOf('..');

  // Вычисление результата для различных положений '..' в выражении
  if (colon > 0 && colon !== length - 1) {
    const a = +expession[colon - 1];
    const b = +expession[colon + 1];
    res = (b - a) / 2 + a;
  }
  // Вычисление результата для положений '..' в вначале
  if (colon === 0) {
    const a = +expession[colon + 1];
    const b = +expession[colon + 2];
    res = (b - a) - a;
  }
  // Вычисление результата для положений '..' в конце
  if (colon === length - 1) {
    const a = +expession[colon - 2];
    const b = +expession[colon - 1];
    res = (b - a) + b;
  }

  // Возвращение объекта с результатами проверки
  return {
    resAnswer: res === answer,
    strAnswer: res,
  };
};

// Экспорт функции checkOutProgression по умолчанию
export default checkOutProgression;
