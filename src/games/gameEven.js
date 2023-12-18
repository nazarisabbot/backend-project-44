function gameEven() {
  const number = Math.floor(1 + Math.random() * (50 + 1 - 1));
  const evenOrNot = number % 2 === 0;

  return {
    question: number,
    answer: evenOrNot ? 'yes' : 'no',
  };
}

export default gameEven;
