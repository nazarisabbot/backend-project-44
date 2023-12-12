const checkOutEven = (num, str) => {
  const evenOrNot = num % 2 === 0;
  if ((evenOrNot && str.toLowerCase() === 'yes') || (!evenOrNot && str.toLowerCase() === 'no')) {
    return {
      resAnswer: true,
      strAnswer: 'yes',
    };
  }
  if (evenOrNot && str.toLowerCase() === 'no') {
    return {
      resAnswer: false,
      strAnswer: 'yes',
    };
  }
  if (!evenOrNot && str.toLowerCase() === 'yes') {
    return {
      resAnswer: false,
      strAnswer: 'no',
    };
  }
  return {
    resAnswer: false,
    strAnswer: evenOrNot ? 'yes' : 'no',
  };
};

export default checkOutEven;
