#!/usr/bin/env node
import getNameUser from '../src/cli.js';

const dictionary = {
  greetings: 'Hello, '
}

console.log('Welcome to the Brain Games!');

const userName = getNameUser('May I have your name?');

console.log(`${dictionary.greetings}${userName}!`);


