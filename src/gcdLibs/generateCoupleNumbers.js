import randomNumber from '../evenLibs/generateRandomNum.js';

const randomCoupleNumbers = () => {
  const firstNum = randomNumber(100);
  const secondNum = randomNumber(100);

  const arrOfOperators = ['+', '-', '*'];

  return `${firstNum} ${secondNum}`;
};

export default randomCoupleNumbers;
