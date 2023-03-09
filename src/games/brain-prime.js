import {
  runGame, getRandomNumber, countOfRounds,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

const generatePrimeRoundData = () => {
  const number = getRandomNumber(100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  const roundsData = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    roundsData.push(generatePrimeRoundData());
  }
  runGame(roundsData, description);
};
