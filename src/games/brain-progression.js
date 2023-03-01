#!/usr/bin/env node
import {
  greeting, runRound, countOfRounds, randomNumber, hideItem, generateArray,
} from '../index.js';

const description = 'What number is missing in the progression?';

function runProgressionGame() {
  const name = greeting();
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
