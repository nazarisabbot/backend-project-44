import getRandomNum from './getRandomNum.js';

const getProgression = () => {
  const arr = [];
  const length = [25, 30, 35];
  const stepArr = [2, 3, 4, 5];

  const arrayLength = length[getRandomNum(0, 2)];
  const step = stepArr[getRandomNum(0, 3)];

  for (let i = 0; i < arrayLength + 1; i += step) {
    arr.push(i);
  }

  return arr;
};

export default getProgression;
