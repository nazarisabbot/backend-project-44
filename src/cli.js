import readlineSync from 'readline-sync';
// Функция запроса данных от пользователя
const getAnswerFromUser = (answer) => {
  const name = readlineSync.question(answer);
  return name;
};

export default getAnswerFromUser;
