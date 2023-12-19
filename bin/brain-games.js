#!/usr/bin/env node
import getAnswerFromUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getAnswerFromUser();
console.log(`Hello, ${userName}!`);
