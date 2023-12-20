import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function gameEven() {
  const number = getRandomNum(1, 50);
  const evenOrNot = number % 2 === 0 ? 'yes' : 'no';

  return [number, evenOrNot];
}

export default () => runEngine(gameEven, rules);
