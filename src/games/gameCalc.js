import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';
import arrOfOperators from '../arrOfOperators.js';
import canculation from '../canculation.js';

const rules = 'What is the result of the expression?';

function gameCalc() {
  // let res = null;
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);

  const selectedOperator = arrOfOperators[getRandomNum(0, 2)];

  const expression = `${firstNum} ${selectedOperator} ${secondNum}`;

  const res = canculation(selectedOperator, firstNum, secondNum);

  return [expression, String(res)];
}

export default () => runEngine(gameCalc, rules);
