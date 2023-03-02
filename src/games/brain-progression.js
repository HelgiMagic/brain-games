import readlineSync from 'readline-sync';
import {
  runRound, countOfRounds, randomNumber,
} from '../index.js';

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

function generateArray(startNumber, oneStep, length) {
  const result = [];
  for (let i = 0, currentNumber = startNumber; i < length; i += 1, currentNumber += oneStep) {
    result.push(currentNumber);
  }
  return result;
}

const description = 'What number is missing in the progression?';

function runProgressionGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  let countOfRightAnswers = 0;

  while (countOfRightAnswers < countOfRounds) {
    const oneStep = randomNumber(10, 2);
    const startNumberOfProgression = randomNumber(100);
    const arrayWithNumbersOfProgression = generateArray(startNumberOfProgression, oneStep, 10);

    const missingNumberPosition = randomNumber(9);
    const resultArray = hideItem(arrayWithNumbersOfProgression, missingNumberPosition);

    const row = resultArray.join(' ');
    const correctAnswer = arrayWithNumbersOfProgression[missingNumberPosition];
    countOfRightAnswers += 1;
    const brainEvenQuestion = runRound(row, correctAnswer, name, countOfRightAnswers);
    if (brainEvenQuestion === 'incorrect') {
      return;
    }
  }
}
export default runProgressionGame;
