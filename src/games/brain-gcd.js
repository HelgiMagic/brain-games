import {
  runGame, countOfRounds, randomNumber, greeting,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);
  if (maxNumber % minNumber === 0) {
    return minNumber;
  }
  const remainder = maxNumber % minNumber;
  return findGcd(remainder, minNumber);
};

const runGCDGame = () => {
  const name = greeting(description);
  const questionsAnswers = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    const number1 = randomNumber(100);
    const number2 = randomNumber(100);

    const question = `${number1} ${number2}`;
    const correctAnswer = findGcd(number1, number2);
    questionsAnswers.push([question, correctAnswer]);
  }
  runGame(questionsAnswers, name);
};
export default runGCDGame;
