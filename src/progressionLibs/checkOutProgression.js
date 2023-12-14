const checkOutProgression = (num, str) => {
  const answer = Number(str);
  const expession = num.split(' ');
  const { length } = expession;

  let res = null;

  const colon = expession.indexOf('..');

  if (colon > 0 && colon !== length - 1) {
    const a = +expession[colon - 1];
    const b = +expession[colon + 1];
    res = (b - a) / 2 + a;
  }

  if (colon === 0) {
    const a = +expession[colon + 1];
    const b = +expession[colon + 2];
    res = (b - a) - a;
  }

  if (colon === length - 1) {
    const a = +expession[colon - 2];
    const b = +expession[colon - 1];
    res = (b - a) + b;
  }

  return {
    resAnswer: res === answer,
    strAnswer: res,
  };
};

export default checkOutProgression;
