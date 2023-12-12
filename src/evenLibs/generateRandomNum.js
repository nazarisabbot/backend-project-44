const randomNumber = ({ min = 1, max = 50 } = {}) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default randomNumber;
