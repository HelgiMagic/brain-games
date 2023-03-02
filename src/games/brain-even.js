import readlineSync from 'readline-sync';
import {
  runRound, countOfRounds, randomNumber,
} from '../index.js';

function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function runEvenGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
