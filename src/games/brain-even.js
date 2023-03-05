import {
  runGame, countOfRounds, randomNumber, greeting,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return (number % 2 === 0);
}

function runEvenGame() {
  const name = greeting(description);
  const questionsAnswers = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const number = randomNumber(1000);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    questionsAnswers.push([number, correctAnswer]);
  }
  runGame(questionsAnswers, name);
}
export default runEvenGame;
