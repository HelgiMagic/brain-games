import {
  runGame, countOfRounds, getRandomNumber,
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
  const operators = ['+', '-', '*'];
  const roundsData = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const number1 = getRandomNumber(30);
    const number2 = getRandomNumber(30);
    const operator = operators[getRandomNumber(2)];
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calcNumbs(number1, number2, operator);
    roundsData.push([question, correctAnswer]);
  }
  runGame(roundsData, description);
};
export default runCalcGame;
