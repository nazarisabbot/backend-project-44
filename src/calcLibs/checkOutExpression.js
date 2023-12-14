const checkOutExpression = (num, str) => {
  const answer = Number(str);
  const expession = num.split(' ');

  let res = 0;

  const [num1, operator, num2] = expession;

  switch (operator) {
    case '+':
      res = Number(num1) + Number(num2);
      break;
    case '-':
      res = Number(num1) - Number(num2);
      break;
    case '*':
      res = Number(num1) * Number(num2);
      break;
    default:
      res = null;
  }

  return {
    resAnswer: res === answer,
    strAnswer: res,
  };
};
export default checkOutExpression;
