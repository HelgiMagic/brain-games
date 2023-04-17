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

const isEven = (number) => (number % 2 === 0);

const getRandomOddNumber = (maxI, minI = 0) => { // maxI, minI = max number included, min number included
  const number = getRandomNumber(maxI, minI);
  return isEven(number) ? number + 1 : number;
}

const generatePrimeRoundData = () => {
  const number = getRandomOddNumber(100);
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
