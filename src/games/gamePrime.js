function gamePrime() {
  const num = Math.floor(1 + Math.random() * (100 + 1 - 1));

  let primeOrNot = true;

  if (num === 1) {
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

  return {
    question: num,
    answer: primeOrNot ? 'yes' : 'no',
  };
}

export default gamePrime;
