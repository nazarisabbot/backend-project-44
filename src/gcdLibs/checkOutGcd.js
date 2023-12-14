const checkOutGcd = (num, str) => {
  const answer = Number(str);
  const expession = num.split(' ');

  const [num1, num2] = expession;

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

  const res = +findGcd(num1, num2);

  return {
    resAnswer: res === answer,
    strAnswer: res,
  };
};

export default checkOutGcd;
