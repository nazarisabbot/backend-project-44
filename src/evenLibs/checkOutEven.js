// Функция проверки ответа на четность числа
const checkOutEven = (num, str) => {
  // Переменная, определяющая четность числа
  const evenOrNot = num % 2 === 0;

  // Возврат результата если ответ был верным
  if ((evenOrNot && str.toLowerCase() === 'yes') || (!evenOrNot && str.toLowerCase() === 'no')) {
    return {
      resAnswer: true,
      strAnswer: 'yes',
    };
  }

  // Возврат результата при не верном ответе
  if (evenOrNot && str.toLowerCase() === 'no') {
    return {
      resAnswer: false,
      strAnswer: 'yes',
    };
  }

  if (!evenOrNot && str.toLowerCase() === 'yes') {
    return {
      resAnswer: false,
      strAnswer: 'no',
    };
  }

  // Возврат результата по умолчанию
  return {
    resAnswer: false,
    strAnswer: evenOrNot ? 'yes' : 'no',
  };
};

// Экспорт функции checkOutEven по умолчанию
export default checkOutEven;
