import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'Find the greatest common divisor of given numbers.';

function gameGcd() {
  const firstNum = getRandomNum({ min: 1, max: 100 });
  const secondNum = getRandomNum({ min: 1, max: 100 });

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

  const res = findGcd(firstNum, secondNum);

  return [`${firstNum} ${secondNum}`, String(res)];
}

export default () => runEngine(gameGcd, rules);
