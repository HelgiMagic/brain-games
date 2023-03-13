import {
  runGame, getRandomNumber, countOfRounds,
} from '../index.js';

const description = 'What number is missing in the progression?';
const arrLength = 10;

const generateProgressionArray = (startNumber, oneStep, length) => {
  const result = [];
  for (let i = startNumber; result.length < length; i += oneStep) {
    result.push(i);
  }
  return result;
};

const generateProgressionRoundData = () => {
  const oneStep = getRandomNumber(10, 2);
  const startNumberOfProgression = getRandomNumber(100);
  const array = generateProgressionArray(startNumberOfProgression, oneStep, arrLength);

  const missingNumberPosition = getRandomNumber(9);
  const correctAnswer = array[missingNumberPosition];

  array.splice(missingNumberPosition, 1, '..');
  const question = array.join(' ');

  return [question, correctAnswer.toString()];
};

export default () => {
  const roundsData = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    roundsData.push(generateProgressionRoundData());
  }
  runGame(roundsData, description);
};
