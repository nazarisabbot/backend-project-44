#!/usr/bin/env node
import startGame from '../src/index.js';
import gameGcd from '../src/games/gameGcd.js';
import dictionary from '../src/dictionary.js';

startGame(gameGcd, dictionary.gcd);
