#!/usr/bin/env node
import startGame from '../src/index.js';
import gameProgression from '../src/games/gameProgression.js';
import dictionary from '../src/dictionary.js';

startGame(gameProgression, dictionary.progression);
