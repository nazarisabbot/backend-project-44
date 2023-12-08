import readlineSync from 'readline-sync';

const getNameUser = (answer) => {
  const name = readlineSync.question(answer);
  return name;
};

export default getNameUser;
