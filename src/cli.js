import readlineSync from 'readline-sync';

const getAnswerFromUser = (answer) => {
  const name = readlineSync.question(answer);
  return name;
};

export default getAnswerFromUser;
