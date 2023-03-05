import readlineSync from 'readline-sync';

const countOfRounds = 3;

function runGame(questionsAnswers, name) {
  for (let i = 0; i < countOfRounds; i += 1) {
    const question = questionsAnswers[i][0];
    const rightAnswer = questionsAnswers[i][1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (i === countOfRounds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

function randomNumber(maxNumIncluded, minNumIncluded = 0) {
  return Math.floor(Math.random() * ((maxNumIncluded + 1) - minNumIncluded) + minNumIncluded);
}

function greeting(description) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  return name;
}

export {
  runGame, countOfRounds, randomNumber, greeting,
};
