const getRandomNum = (min = 0, max = 50) => {
  const random = Math.floor(min + Math.random() * (max + 1 - min));
  return random;
};

export default getRandomNum;
