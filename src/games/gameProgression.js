import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'What number is missing in the progression?';

function gameProgression() {
  const resArr = [];
  const length = [25, 30, 35];
  const stepArr = [2, 3, 4, 5];

  const arrayLength = length[getRandomNum({ min: 0, max: 2 })];
  const step = stepArr[getRandomNum({ min: 0, max: 3 })];

  for (let i = 0; i < arrayLength + 1; i += step) {
    resArr.push(i);
  }

  const hideIndex = getRandomNum({ min: 0, max: resArr.length - 1 });
  const hideElements = resArr[hideIndex];
  resArr.splice(hideIndex, 1, '..');

  return [`${resArr.join(' ')}`, String(hideElements)];
}

export default () => runEngine(gameProgression, rules);
