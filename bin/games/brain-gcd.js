#!/usr/bin/env node
import game from '../../src/index.js';
import getAnswerFromUser from '../../src/cli.js';
import dictionary from '../../src/dictionary.js';
import randomCoupleNumbers from '../../src/gcdLibs/generateCoupleNumbers.js';
import checkOutGcd from '../../src/gcdLibs/checkOutGcd.js';

// Определение объекта с параметрами для функции
const options = {
  greetings: dictionary.greetings, // Приветствие
  createQuestion: getAnswerFromUser, // Функция запроса данных от пользователя
  conditional: dictionary.gcd, // Условия задачи
  generateFun: randomCoupleNumbers, // Функция генерации пары чисел
  result: checkOutGcd, // Функция проверки ответа
};

game(options);
