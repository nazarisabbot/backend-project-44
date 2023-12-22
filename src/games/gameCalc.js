import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'What is the result of the expression?';
const arrOfOperators = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

function gameCalc() {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);

  const selectedOperator = arrOfOperators[getRandomNum(0, arrOfOperators.length - 1)];

  const expression = `${firstNum} ${selectedOperator} ${secondNum}`;

  const res = calculate(selectedOperator, firstNum, secondNum);

  return [expression, String(res)];
}

export default () => runEngine(gameCalc, rules);
