import {
  runGame, countOfRounds, getRandomNumber,
} from '../index.js';

const description = 'What number is missing in the progression?';
const arrLength = 10;

const generateProgressionArray = (startNumber, oneStep, length) => {
  const result = [];
  for (let i = 0, currentNumber = startNumber; i < length; i += 1, currentNumber += oneStep) {
    result.push(currentNumber);
  }
  return result;
};

const runProgressionGame = () => {
  const roundsData = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const oneStep = getRandomNumber(10, 2);
    const startNumberOfProgression = getRandomNumber(100);
    const array = generateProgressionArray(startNumberOfProgression, oneStep, arrLength);

    const missingNumberPosition = getRandomNumber(9);
    const correctAnswer = array[missingNumberPosition];

    array.splice(missingNumberPosition, 1, '..');
    const question = array.join(' ');

    roundsData.push([question, correctAnswer]);
  }
  runGame(roundsData, description);
};
export default runProgressionGame;
