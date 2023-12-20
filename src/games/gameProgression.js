import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';
import getProgression from '../getProgression.js';

const rules = 'What number is missing in the progression?';

function gameProgression() {
  const resArr = getProgression();

  const hideIndex = getRandomNum(0, resArr.length - 1);
  const hideElements = resArr[hideIndex];
  resArr.splice(hideIndex, 1, '..');

  return [`${resArr.join(' ')}`, String(hideElements)];
}

export default () => runEngine(gameProgression, rules);
