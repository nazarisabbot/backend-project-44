function gameEven() {
  let res = null;
  const firstNum = Math.floor(1 + Math.random() * (100 + 1 - 1));
  const secondNum = Math.floor(1 + Math.random() * (100 + 1 - 1));

  const arrOfOperators = ['+', '-', '*'];
  const selectedOperator = arrOfOperators[Math.floor(0 + Math.random() * (2 + 0 - 0))];

  const expression = `${firstNum} ${selectedOperator} ${secondNum}`;

  switch (selectedOperator) {
    case '+':
      res = Number(firstNum) + Number(secondNum);
      break;
    case '-':
      res = Number(firstNum) - Number(secondNum);
      break;
    case '*':
      res = Number(firstNum) * Number(secondNum);
      break;
    default:
      return null;
  }

  return {
    question: expression,
    answer: String(res),
  };
}

export default gameEven;
