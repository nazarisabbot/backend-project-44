const checkOutPrime = (num, str) => {
  let primeOrNot = true;

  if (num === 1) {
    primeOrNot = false;
  }
  if (num === 2) {
    primeOrNot = false;
  }
  if (num % 2 === 0) {
    primeOrNot = false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      primeOrNot = false;
    }
  }

  if ((primeOrNot && str.toLowerCase() === 'yes') || (!primeOrNot && str.toLowerCase() === 'no')) {
    return {
      resAnswer: true,
      strAnswer: 'yes',
    };
  }
  if (primeOrNot && str.toLowerCase() === 'no') {
    return {
      resAnswer: false,
      strAnswer: 'yes',
    };
  }
  if (!primeOrNot && str.toLowerCase() === 'yes') {
    return {
      resAnswer: false,
      strAnswer: 'no',
    };
  }
  return {
    resAnswer: false,
    strAnswer: primeOrNot ? 'yes' : 'no',
  };
};

export default checkOutPrime;
