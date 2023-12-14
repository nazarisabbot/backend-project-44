import randomNumber from '../evenLibs/generateRandomNum.js';

const generateProgressionNumbers = () => {
  const resArr = [];
  const length = [25, 30, 35];
  const stepArr = [2, 3, 4, 5];

  const arrayLength = length[randomNumber({ min: 0, max: 2 })];
  const step = stepArr[randomNumber({ min: 0, max: 3 })];
  for (let i = 0; i < arrayLength + 1; i += step) {
    resArr.push(i);
  }

  const hideIndex = randomNumber({ min: 0, max: resArr.length - 1 });
  resArr.splice(hideIndex, 1, '..');

  return `${resArr.join(' ')}`;
};

export default generateProgressionNumbers;
