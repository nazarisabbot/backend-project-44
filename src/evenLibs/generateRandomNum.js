function randomNumber({ min = 1, max = 50 } = {}) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
export default randomNumber;
