import {
  runGame, countOfRounds, randomNumber, greeting,
} from '../index.js';

const description = 'What number is missing in the progression?';

function hideItem(array, hiddenNumberPosition) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i !== hiddenNumberPosition) {
      result.push(array[i]);
    } else {
      result.push('..');
    }
  }
  return result;
}

function generateProgressionArray(startNumber, oneStep, length) {
  const result = [];
  for (let i = 0, currentNumber = startNumber; i < length; i += 1, currentNumber += oneStep) {
    result.push(currentNumber);
  }
  return result;
}

function runProgressionGame() {
  const name = greeting(description);
  const questionsAnswers = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const oneStep = randomNumber(10, 2);
    const startNumberOfProgression = randomNumber(100);
    const length = 10;
    const array = generateProgressionArray(startNumberOfProgression, oneStep, length);

    const missingNumberPosition = randomNumber(9);
    const resultArray = hideItem(array, missingNumberPosition);

    const question = resultArray.join(' ');
    const correctAnswer = array[missingNumberPosition];

    questionsAnswers.push([question, correctAnswer]);
  }
  runGame(questionsAnswers, name);
}
export default runProgressionGame;
