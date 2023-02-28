import readlineSync from 'readline-sync';

function question(task, rightAnswer, name, countOfRightAnswers) {
  console.log(`Question: ${task}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === rightAnswer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    return 'incorrect';
  }
  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  return rightAnswer;
}

export default question;
