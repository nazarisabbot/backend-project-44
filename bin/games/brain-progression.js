#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import generateProgressionNumbers from '../../src/progressionLibs/generateProgressionNumbers.js';
import checkOutProgression from '../../src/progressionLibs/checkOutProgression.js';

const options = {
  greetings: dictionary.greetings,
  createQuestion: getAnswerFromUser,
  conditional: dictionary.progression,
  generateFun: generateProgressionNumbers,
  result: checkOutProgression,
};

game(options);
