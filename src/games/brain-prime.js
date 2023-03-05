import {
  runGame, countOfRounds, randomNumber, greeting,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrimeNumber(number) {
  if (number < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
}

function runPrimeGame() {
  const name = greeting(description);
  const questionsAnswers = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const number = randomNumber(100);
    const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
    questionsAnswers.push([number, correctAnswer]);
  }
  runGame(questionsAnswers, name);
}
export default runPrimeGame;
