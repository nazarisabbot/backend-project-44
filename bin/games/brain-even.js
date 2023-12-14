#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import randomNumber from '../../src/evenLibs/generateRandomNum.js';
import checkOutEven from '../../src/evenLibs/checkOutEven.js';

// Определение объекта с параметрами для функции
const options = {
  greetings: dictionary.greetings, // Приветствие
  createQuestion: getAnswerFromUser, // Функция запроса данных от пользователя
  conditional: dictionary.even, // Условия задачи
  generateFun: randomNumber, // Функция генерации числа
  result: checkOutEven, // Функция проверки ответа
};

game(options);
