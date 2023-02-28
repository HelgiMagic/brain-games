#!/usr/bin/env node
import { greeting, findGCD } from '../cli.js';
import question from '../index.js';

function brainGCD() {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let countOfRightAnswers = 0;
  while (countOfRightAnswers < 3) {
    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    const GCD = findGCD(numberOne, numberTwo);
    const correctAnswer = GCD;
    countOfRightAnswers += 1;
    const brainGCDQuestion = question(`${numberOne} ${numberTwo}`, correctAnswer, name, countOfRightAnswers);
    if (brainGCDQuestion === 'incorrect') {
      return;
    }
  }
}
export default brainGCD;
