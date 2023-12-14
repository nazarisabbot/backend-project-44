#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import randomExpression from '../../src/calcLibs/generateExpression.js';
import checkOutExpression from '../../src/calcLibs/checkOutExpression.js';

// Определение объекта с параметрами для функции
const options = {
  greetings: dictionary.greetings, // Приветствие
  createQuestion: getAnswerFromUser, // Функция запроса данных от пользователя
  conditional: dictionary.calc, // Условия задачи
  generateFun: randomExpression, // Функция генерации мат. выражения
  result: checkOutExpression, // Функция проверки ответа
};

game(options);
