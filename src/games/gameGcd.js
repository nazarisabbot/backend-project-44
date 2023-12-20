import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';
import findGcd from '../findGcd.js';

const rules = 'Find the greatest common divisor of given numbers.';

function gameGcd() {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);

  const res = findGcd(firstNum, secondNum);

  return [`${firstNum} ${secondNum}`, String(res)];
}

export default () => runEngine(gameGcd, rules);
