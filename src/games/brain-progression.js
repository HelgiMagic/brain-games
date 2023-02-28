#!/usr/bin/env node
import { greeting } from '../cli.js';
import question from '../index.js';

function brainProgression() {
  const name = greeting();
  console.log('What number is missing in the progression?');

  let countOfRightAnswers = 0;

  while (countOfRightAnswers < 3) {
    const oneStep = Math.floor(Math.random() * (11 - 2)) + 2;
    const arrayWithNumbersOfProgression = [];
    let numberOfProgression = Math.floor(Math.random() * 100);
    const missingNumberPosition = Math.floor(Math.random() * 10);
    let missingNumber = 0;

    for (let i = 0; i < 10; i += 1) {
      numberOfProgression += oneStep;
      if (i === missingNumberPosition) {
        missingNumber = numberOfProgression;
        arrayWithNumbersOfProgression.push('..');
      }
      if (i !== missingNumberPosition) { arrayWithNumbersOfProgression.push(numberOfProgression); }
    }

    const row = arrayWithNumbersOfProgression.join(' ');
    const correctAnswer = missingNumber;
    countOfRightAnswers += 1;
    const brainEvenQuestion = question(row, correctAnswer, name, countOfRightAnswers);
    if (brainEvenQuestion === 'incorrect') {
      return;
    }
  }
}
export default brainProgression;
