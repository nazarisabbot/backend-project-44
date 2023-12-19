import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function gamePrime() {
  const num = getRandomNum({ min: 1, max: 100 });

  let primeOrNot = true;

  if (num === 1) {
    primeOrNot = false;
  }

  if (num % 2 === 0) {
    primeOrNot = false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      primeOrNot = false;
    }
  }

  const trueStr = primeOrNot ? 'yes' : 'no';

  return [num, trueStr];
}

export default () => runEngine(gamePrime, rules);
