import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function gameEven() {
  const number = getRandomNum({ min: 1, max: 50 });
  const evenOrNot = number % 2 === 0;

  const trueStr = evenOrNot ? 'yes' : 'no';

  return [number, trueStr];
}

export default () => runEngine(gameEven, rules);
