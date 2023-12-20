const findGcd = (a, b) => {
  let tempA = a;
  let tempB = b;
  while (tempB) {
    const temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
  }
  return tempA;
};

export default findGcd;
