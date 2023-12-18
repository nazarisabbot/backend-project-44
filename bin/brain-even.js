#!/usr/bin/env node
import startGame from '../src/index.js';
import gameEven from '../src/games/gameEven.js';
import dictionary from '../src/dictionary.js';

startGame(gameEven, dictionary.even);
