#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import randomExpression from '../../src/calcLibs/generateExpression.js';
import checkOutExpression from '../../src/calcLibs/checkOutExpression.js';

const options = {
  greetings: dictionary.greetings,
  createQuestion: getAnswerFromUser,
  conditional: dictionary.calc,
  generateFun: randomExpression,
  result: checkOutExpression,
};

game(options);
