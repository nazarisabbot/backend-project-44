const checkOutProgression = (num, str) => {
  const answer = Number(str);
  const expession = num.split(" ");

  let res = null;

  for (let i = 0; i < expession.length; i++) {
    if(expession[i] === '..') {
      let a = +expession[i - 1];
      let b = +expession[i + 1];
      res = (b - a) / 2 + a;
    }
  }

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

export default checkOutProgression;
