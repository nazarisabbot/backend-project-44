#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import generateProgressionNumbers from '../../src/progressionLibs/generateProgressionNumbers.js';
import checkOutProgression from '../../src/progressionLibs/checkOutProgression.js';

// Определение объекта с параметрами для функции
const options = {
  greetings: dictionary.greetings, // Приветствие
  createQuestion: getAnswerFromUser, // Функция запроса данных от пользователя
  conditional: dictionary.progression, // Условия задачи
  generateFun: generateProgressionNumbers, // Функция генерации прогрессии
  result: checkOutProgression, // Функция проверки ответа
};

game(options);
