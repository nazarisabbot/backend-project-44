function gameProgression() {
  const resArr = [];
  const length = [25, 30, 35];
  const stepArr = [2, 3, 4, 5];

  const arrayLength = length[Math.floor(0 + Math.random() * (2 + 0 - 0))];
  const step = stepArr[Math.floor(0 + Math.random() * (4 + 0 - 0))];

  for (let i = 0; i < arrayLength + 1; i += step) {
    resArr.push(i);
  }

  const hideIndex = Math.floor(0 + Math.random() * (resArr.length - 1 + 0 - 0));
  const hideElements = resArr[hideIndex];
  resArr.splice(hideIndex, 1, '..');

  return {
    question: `${resArr.join(' ')}`,
    answer: String(hideElements),
  };
}

export default gameProgression;
