#!/usr/bin/env node
import { greeting } from '../cli.js';
import { question } from '../index.js';

function brainPrime() {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < 3) {
    let correctAnswer = 'no';
    const number = Math.floor(Math.random() * 100);
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) { break; }
      if (number - 1 === i) { correctAnswer = 'yes'; }
    }
    countOfRightAnswers += 1;
    const brainPrimeQuestion = question(number, correctAnswer, name, countOfRightAnswers);
    if (brainPrimeQuestion === 'incorrect') {
      return;
    }
  }
}
export default brainPrime;
