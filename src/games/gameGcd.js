function gameGcd() {
  const firstNum = Math.floor(1 + Math.random() * (100 + 1 - 1));
  const secondNum = Math.floor(1 + Math.random() * (100 + 1 - 1));

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

  const res = findGcd(firstNum, secondNum);

  return {
    question: `${firstNum} ${secondNum}`,
    answer: String(res),
  };
}

export default gameGcd;
