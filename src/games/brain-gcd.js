#!/usr/bin/env node
import { greeting } from '../cli.js';
import { question } from '../index.js';

function brainGCD() {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < 3) {
    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    const minNumber = Math.min(numberOne, numberTwo);
    let GCD = 0;
    for (let i = 0; i <= minNumber; i += 1) {
      if (numberOne % i === 0 && numberTwo % i === 0) {
        GCD = i;
      }
    }
    const correctAnswer = GCD;
    countOfRightAnswers += 1;
    const brainGCDQuestion = question(`${numberOne} ${numberTwo}`, correctAnswer, name, countOfRightAnswers);
    if (brainGCDQuestion === 'incorrect') {
      return;
    }
  }
}
export default brainGCD;
