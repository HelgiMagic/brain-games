import readlineSync from 'readline-sync';
import {
  runRound, countOfRounds, randomNumber,
} from '../index.js';

function isPrimeNumber(number) {
  if (number < 2) { return 'no'; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) { return 'no'; }
  }
  return 'yes';
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function runPrimeGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
