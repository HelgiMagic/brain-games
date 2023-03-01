#!/usr/bin/env node
import {
  calcNumbs, greeting, runRound, countOfRounds, randomNumber,
} from '../index.js';

const description = 'What is the result of the expression?';

function runCalcGame() {
  const name = greeting();
  console.log(description);
  let countOfRightAnswers = 0;
  const operators = ['+', '-', '*'];
  while (countOfRightAnswers < countOfRounds) {
    const numberOne = randomNumber(30);
    const numberTwo = randomNumber(30);
    const operation = operators[randomNumber(2)];
    const task = `${numberOne} ${operation} ${numberTwo}`;
    const correctAnswer = calcNumbs(numberOne, operation, numberTwo);
    countOfRightAnswers += 1;
    const brainCalcQuestion = runRound(task, correctAnswer, name, countOfRightAnswers);
    if (brainCalcQuestion === 'incorrect') {
      return;
    }
  }
}
export default runCalcGame;
