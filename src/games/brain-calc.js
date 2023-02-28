#!/usr/bin/env node
import { greeting } from '../cli.js';
import { question } from '../index.js';

function brainCalc() {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfRightAnswers = 0;
  const operators = ['+', '-', '*'];
  while (countOfRightAnswers < 3) {
    const numberOne = Math.floor(Math.random() * 30);
    const numberTwo = Math.floor(Math.random() * 30);
    const operation = operators[Math.floor(Math.random() * 3)];
    const task = `${numberOne} ${operation} ${numberTwo}`;
    const correctAnswer = eval(`${numberOne} ${operation} ${numberTwo}`);
    countOfRightAnswers += 1;
    const brainCalcQuestion = question(task, correctAnswer, name, countOfRightAnswers);
    if (brainCalcQuestion === 'incorrect') {
      return;
    }
  }
}
export default brainCalc;