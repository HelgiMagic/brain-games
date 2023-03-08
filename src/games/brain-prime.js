import {
  runGame, getRandomNumber, generateRoundsData,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

const primeRoundData = () => {
  const number = getRandomNumber(100);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  const roundsData = generateRoundsData(primeRoundData);
  runGame(roundsData, description);
};
