#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import randomCoupleNumbers from '../../src/gcdLibs/generateCoupleNumbers.js';
import checkOutGcd from '../../src/gcdLibs/checkOutGcd.js';

const options = {
  greetings: dictionary.greetings,
  createQuestion: getAnswerFromUser,
  conditional: dictionary.gcd,
  generateFun: randomCoupleNumbers,
  result: checkOutGcd,
};

game(options);
