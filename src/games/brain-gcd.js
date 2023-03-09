import {
  runGame, getRandomNumber, countOfRounds,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);

  if (maxNumber % minNumber === 0) return minNumber;

  return getGcd(minNumber, maxNumber % minNumber);
};

const generateGcdRoundData = () => {
  const number1 = getRandomNumber(100, 1);
  const number2 = getRandomNumber(100, 1);

  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, correctAnswer];
};

export default () => {
  const roundsData = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    roundsData.push(generateGcdRoundData());
  }
  runGame(roundsData, description);
};
