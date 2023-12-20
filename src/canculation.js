const canculation = (operator, firstNum, secondNum) => {
  let res = null;

  switch (operator) {
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

  return res;
};

export default canculation;
