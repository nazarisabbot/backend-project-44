#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import generateNumbers from '../../src/primeLibs/generateNumbers.js';
import checkOutPrime from '../../src/primeLibs/checkOutPrime.js';

// Определение объекта с параметрами для функции
const options = {
  greetings: dictionary.greetings, // Приветствие
  createQuestion: getAnswerFromUser, // Функция запроса данных от пользователя
  conditional: dictionary.prime, // Условия задачи
  generateFun: generateNumbers, // Функция генерации числа
  result: checkOutPrime, // Функция проверки ответа
};

game(options);
