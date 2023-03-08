import {
  runGame, countOfRounds, getRandomNumber,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

const runPrimeGame = () => {
  const roundsData = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const number = getRandomNumber(100);
    const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
    roundsData.push([number, correctAnswer]);
  }
  runGame(roundsData, description);
};
export default runPrimeGame;
