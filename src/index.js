const game = (options) => {
  let points = 0;

  console.log('Welcome to the Brain Games!');
  const userName = options.createQuestion('May I have your name?');
  console.log(`${options.greetings}${userName}!`);

  if (options.conditional !== undefined) {
    console.log(`${options.conditional}`);
  }

  const generationOfquestions = () => {
    const example = options.generateFun();
    console.log(`Question: ${example}`);
    const answer = options.createQuestion();

    const solution = options.result(example, answer);

    console.log(`Your answer: ${answer}`);

    if (solution.resAnswer) {
      console.log('Correct!');
      points += 1;
    } else {
      console.log(`${answer}' is wrong answer ;(. Correct answer was ${solution.strAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      points = 0;
    }

    if (points < 3 && points > 0) {
      generationOfquestions();
    } else if (points === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  };

  generationOfquestions();
};

export default game;
