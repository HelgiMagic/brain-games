import readlineSync from 'readline-sync';
import {
  runRound, countOfRounds, randomNumber,
} from '../index.js';

function calcNumbs(numberOne, operation, numberTwo) {
  let result = 0;
  if (operation === '+') {
    result = numberOne + numberTwo;
  } else if (operation === '-') {
    result = numberOne - numberTwo;
  } else if (operation === '*') {
    result = numberOne * numberTwo;
  }
  return result;
}

const description = 'What is the result of the expression?';

function runCalcGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
