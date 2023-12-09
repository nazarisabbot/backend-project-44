#!/usr/bin/env node
import getAnswerFromUser from '../src/cli.js';
import dictionary from '../src/dictionary.js';

// Функция - генератор случайного числа
const randomNumber = (factor = 30) => Math.ceil(Math.random() * factor);

// Запуск игры
let score = 0;

console.log('Welcome to the Brain Games!');
const userName = getAnswerFromUser('May I have your name?');
console.log(`${dictionary.greetings}${userName}!`);
console.log(`${dictionary.even}`);

const generationOfquestions = () => {
  const number = randomNumber();
  const evenOrNot = number % 2 === 0;

  console.log(`Question: ${number}`);
  const answer = getAnswerFromUser();
  console.log(`Your answer: ${answer}`);

  if ((evenOrNot && answer.toLowerCase() === 'yes') || (!evenOrNot && answer.toLowerCase() === 'no')) {
    console.log('Correct!');
    score += 1;
  } else {
    console.log(`${answer}' is wrong answer ;(. Correct answer was ${evenOrNot ? 'yes' : 'no'}.`);
    score = 0;
  }

  if (score < 3 && score > 0) {
    generationOfquestions();
  } else if (score === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

generationOfquestions();
