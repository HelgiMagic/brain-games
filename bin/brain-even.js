#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
function brainEven() {
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < 3) {
    const number = Math.floor(Math.random() * 1000);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answer === 'yes') {
      countOfRightAnswers += 1;
      console.log('Correct!');
    } else if (number % 2 === 1 && answer === 'no') {
      countOfRightAnswers += 1;
      console.log('Correct!');
    } else {
      const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
brainEven();
