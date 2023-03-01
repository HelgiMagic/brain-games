#!/usr/bin/env node
import {
  isPrimeNumber, greeting, runRound, countOfRounds, randomNumber,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function runPrimeGame() {
  const name = greeting();
  console.log(description);
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < countOfRounds) {
    const number = randomNumber(100);
    const correctAnswer = isPrimeNumber(number);
    countOfRightAnswers += 1;
    const brainPrimeQuestion = runRound(number, correctAnswer, name, countOfRightAnswers);
    if (brainPrimeQuestion === 'incorrect') {
      return;
    }
  }
}
export default runPrimeGame;
