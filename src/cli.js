import readlineSync from 'readline-sync';

const getAnswerFromUser = () => {
  const name = readlineSync.question('May I have your name?');
  return name;
};

export default getAnswerFromUser;
