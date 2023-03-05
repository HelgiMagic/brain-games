import {
  runGame, countOfRounds, randomNumber, greeting,
} from '../index.js';

const description = 'What is the result of the expression?';

const calcNumbs = (number1, number2, operator) => {
  let result;
  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else if (operator === '*') {
    result = number1 * number2;
  }
  return result;
};

const runCalcGame = () => {
  const name = greeting(description);
  const operators = ['+', '-', '*'];
  const questionsAnswers = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const number1 = randomNumber(30);
    const number2 = randomNumber(30);
    const operator = operators[randomNumber(2)];
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calcNumbs(number1, number2, operator);
    questionsAnswers.push([question, correctAnswer]);
  }
  runGame(questionsAnswers, name);
};
export default runCalcGame;
