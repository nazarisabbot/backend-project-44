import readlineSync from 'readline-sync';

const startGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log(`${description}`);

  let winnings = 0;

  while (winnings < 3) {
    const { question, answer } = game();

    console.log(`Question: ${question}`);
    const resultFromUser = readlineSync.question();
    console.log(`Your answer: ${resultFromUser}`);

    if (answer === resultFromUser) {
      console.log('Correct!');
      winnings += 1;
    } else {
      console.log(`'${resultFromUser}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    if (winnings === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default startGame;
