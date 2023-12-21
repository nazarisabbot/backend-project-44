import runEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const rules = 'What number is missing in the progression?';
const length = getRandomNum(25, 35);
const step = getRandomNum(2, 5);

const getProgression = (length1, step1) => {
  const arr = [];

  for (let i = 0; i < length1 + 1; i += step1) {
    arr.push(i);
  }

  return arr;
};

function gameProgression() {
  const resArr = getProgression(length, step);

  const hideIndex = getRandomNum(0, resArr.length - 1);
  const hideElements = resArr[hideIndex];
  resArr.splice(hideIndex, 1, '..');

  return [`${resArr.join(' ')}`, String(hideElements)];
}

export default () => runEngine(gameProgression, rules);
