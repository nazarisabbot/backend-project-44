#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import randomNumber from '../../src/evenLibs/generateRandomNum.js';
import checkOutEven from '../../src/evenLibs/checkOutEven.js';

const options = {
  greetings: dictionary.greetings,
  createQuestion: getAnswerFromUser,
  conditional: dictionary.even,
  generateFun: randomNumber,
  result: checkOutEven,
};

game(options);
