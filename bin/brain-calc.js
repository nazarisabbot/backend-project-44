#!/usr/bin/env node
import startGame from '../src/index.js';
import gameCalc from '../src/games/gameCalc.js';
import dictionary from '../src/dictionary.js';

startGame(gameCalc, dictionary.calc);
