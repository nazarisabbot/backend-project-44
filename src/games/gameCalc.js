import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'What is the result of the expression?';

function gameCalc() {
  let res = null;
  const firstNum = getRandomNum({ min: 1, max: 100 });
  const secondNum = getRandomNum({ min: 1, max: 100 });

  const arrOfOperators = ['+', '-', '*'];
  const selectedOperator = arrOfOperators[Math.floor(0 + Math.random() * (2 + 0 - 0))];

  const expression = `${firstNum} ${selectedOperator} ${secondNum}`;

  switch (selectedOperator) {
    case '+':
      res = Number(firstNum) + Number(secondNum);
      break;
    case '-':
      res = Number(firstNum) - Number(secondNum);
      break;
    case '*':
      res = Number(firstNum) * Number(secondNum);
      break;
    default:
      return null;
  }

  return [expression, String(res)];
}

export default () => runEngine(gameCalc, rules);
