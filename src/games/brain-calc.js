import {
  runGame, getRandomNumber, generateRoundsData,
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

const calcRoundData = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(30);
  const number2 = getRandomNumber(30);
  const operator = operators[getRandomNumber(2)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calcNumbs(number1, number2, operator);
  return [question, correctAnswer];
};

export default () => {
  const roundsData = generateRoundsData(calcRoundData);
  runGame(roundsData, description);
};
