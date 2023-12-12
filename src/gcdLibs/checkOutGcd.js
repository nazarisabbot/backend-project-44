const checkOutGcd = (num, str) => {
  const answer = Number(str);
  const expession = num.split(" ");

  const [num1, num2] = expession;

  const findGcd = (a, b) => {
    while(b) {
     let temp = b;
     b = a % b;
     a = temp;
    }
    return a;
  }

  let res = findGcd(num1, num2);

  if (res === answer) {
    return {
      resAnswer: true,
      strAnswer: res,
    };
  } else {
    return {
      resAnswer: false,
      strAnswer: res,
    };
  }
};

export default checkOutGcd;
