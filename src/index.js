// Определение функции game с параметром options
const game = (options) => {
  // Переменная счета игры, если значение равно трем - игра считается выигранной
  let score = 0;

  // Вывод приветствия в консоль
  console.log('Welcome to the Brain Games!');

  // Запрос имени пользователя с использованием функции createQuestion из объекта options
  const userName = options.createQuestion('May I have your name?');
  // Вывод приветствия с именем пользователя в консоль
  console.log(`${options.greetings}${userName}!`);

  // Если задано условие (conditional), выводим его в консоль
  if (options.conditional !== undefined) {
    console.log(`${options.conditional}`);
  }

  // Функция генерации вопросов и проверки ответов
  const generationOfquestions = () => {
    // Генерация примера с использованием функции generateFun из объекта options
    const example = options.generateFun();
    // Вывод вопроса в консоль
    console.log(`Question: ${example}`);
    // Запрос ответа пользователя с использованием функции createQuestion из объекта options
    const answer = options.createQuestion();

    // Вычисление правильного ответа с использованием функции result из объекта options
    const solution = options.result(example, answer);

    // Вывод ответа пользователя в консоль
    console.log(`Your answer: ${answer}`);

    // Проверка правильности ответа и обновление счета
    if (solution.resAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      // Вывод сообщения об ошибке и правильного ответа в случае неверного ответа
      console.log(`${answer}' is wrong answer ;(. Correct answer was ${solution.strAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      // Сброс счета при неверном ответе
      score = 0;
    }

    // Рекурсивный вызов функции generationOfquestions до достижения счета 3
    if (score < 3 && score > 0) {
      generationOfquestions();
    } else if (score === 3) {
      // Вывод поздравления при достижении счета 3
      console.log(`Congratulations, ${userName}!`);
    }
  };

  // Начало выполнения игры вызовом функции generationOfquestions
  generationOfquestions();
};

// Экспорт функции game по умолчанию
export default game;
