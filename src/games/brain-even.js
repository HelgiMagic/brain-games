#!/usr/bin/env node
import { greeting } from '../cli.js';
import { question } from '../index.js';

function brainEven() {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < 3) {
    const number = Math.floor(Math.random() * 1000);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    countOfRightAnswers += 1;
    const brainEvenQuestion = question(number, correctAnswer, name, countOfRightAnswers);
    if (brainEvenQuestion === 'incorrect') {
      return;
    }
  }
}
export default brainEven;