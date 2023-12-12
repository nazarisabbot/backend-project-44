#!/usr/bin/env node
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';

console.log('Welcome to the Brain Games!');
const userName = getAnswerFromUser('May I have your name?');
console.log(`${dictionary.greetings}${userName}!`);
