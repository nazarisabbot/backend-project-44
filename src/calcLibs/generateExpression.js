import randomNumber from '../evenLibs/generateRandomNum.js';

const randomExpression = () => {
  const firstNum = randomNumber(100);
  const secondNum = randomNumber(100);

  const arrOfOperators = ['+', '-', '*'];

  return `${firstNum} ${arrOfOperators[randomNumber({min: 0, max: 2})]} ${secondNum}`;
};

export default randomExpression;
