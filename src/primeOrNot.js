const primeOrNot = (num) => {
  let res = true;

  if (num === 1) {
    res = false;
  }

  if (num === 2) {
    res = true;
  }

  if (num % 2 === 0) {
    res = false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      res = false;
    }
  }

  return res;
};

export default primeOrNot;
