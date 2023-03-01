#!/usr/bin/env node
import {
  findGCD, greeting, runRound, countOfRounds, randomNumber,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function runGCDGame() {
  const name = greeting();
  console.log(description);
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < countOfRounds) {
    const numberOne = randomNumber(100);
    const numberTwo = randomNumber(100);
    const GCD = findGCD(numberOne, numberTwo);
    const correctAnswer = GCD;
    countOfRightAnswers += 1;
    const brainGCDQuestion = runRound(`${numberOne} ${numberTwo}`, correctAnswer, name, countOfRightAnswers);
    if (brainGCDQuestion === 'incorrect') {
      return;
    }
  }
}
export default runGCDGame;
