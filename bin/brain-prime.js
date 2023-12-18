#!/usr/bin/env node
import startGame from '../src/index.js';
import gamePrime from '../src/games/gamePrime.js';
import dictionary from '../src/dictionary.js';

startGame(gamePrime, dictionary.prime);
