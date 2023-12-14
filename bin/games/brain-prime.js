#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import generateNumbers from '../../src/primeLibs/generateNumbers.js';
import checkOutPrime from '../../src/primeLibs/checkOutPrime.js';

const options = {
  greetings: dictionary.greetings,
  createQuestion: getAnswerFromUser,
  conditional: dictionary.prime,
  generateFun: generateNumbers,
  result: checkOutPrime,
};

game(options);
