import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  let tempA = a;
  let tempB = b;
  while (tempB) {
    const temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
  }
  return tempA;
};

function gameGcd() {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);

  const res = findGcd(firstNum, secondNum);

  return [`${firstNum} ${secondNum}`, String(res)];
}

export default () => runEngine(gameGcd, rules);
