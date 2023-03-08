import {
  runGame, getRandomNumber, generateRoundsData,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);
  if (maxNumber % minNumber === 0) {
    return minNumber;
  }
  const remainder = maxNumber % minNumber;
  return findGcd(remainder, minNumber);
};

const gcdRoundData = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);

  const question = `${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2);
  return [question, correctAnswer];
};

export default () => {
  const roundsData = generateRoundsData(gcdRoundData);
  runGame(roundsData, description);
};
