import {
  runGame, getRandomNumber, generateRoundsData,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const evenRoundData = () => {
  const number = getRandomNumber(1000);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  const roundsData = generateRoundsData(evenRoundData);
  runGame(roundsData, description);
};
