#!/usr/bin/env node
import {
  greeting, runRound, countOfRounds, randomNumber, isEven,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function runEvenGame() {
  const name = greeting();
  console.log(description);
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < countOfRounds) {
    const number = randomNumber(1000);
    const correctAnswer = isEven(number);
    countOfRightAnswers += 1;
    const brainEvenQuestion = runRound(number, correctAnswer, name, countOfRightAnswers);
    if (brainEvenQuestion === 'incorrect') {
      return;
    }
  }
}
export default runEvenGame;
