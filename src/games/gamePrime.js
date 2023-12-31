import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';
import isPrime from '../isPrime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function gamePrime() {
  const num = getRandomNum(1, 100);

  const trueStr = isPrime(num) ? 'yes' : 'no';

  return [num, trueStr];
}

export default () => runEngine(gamePrime, rules);
