import readlineSync from 'readline-sync';
import {
  runRound, countOfRounds, randomNumber,
} from '../index.js';

function findGCD(firstNum, secondNum) {
  const minNumber = Math.min(firstNum, secondNum);
  let GCD = 0;
  for (let i = 0; i <= minNumber; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

const description = 'Find the greatest common divisor of given numbers.';

function runGCDGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
