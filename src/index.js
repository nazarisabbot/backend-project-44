import readlineSync from 'readline-sync';
import winningsScore from './winningsScore.js';

const startGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log(`${description}`);

  for (let winnings = winningsScore; winnings < 3; winnings += 1) {
    const [question, answer] = game();

    console.log(`Question: ${question}`);
    const resultFromUser = readlineSync.question();
    console.log(`Your answer: ${resultFromUser}`);

    if (answer !== resultFromUser) {
      console.log(`'${resultFromUser}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
