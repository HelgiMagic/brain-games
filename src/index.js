import readlineSync from 'readline-sync';

const countOfRounds = 3;

const printGreeting = (description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  return name;
};

const runGame = (roundsData, description) => {
  const name = printGreeting(description);
  for (let i = 0; i < roundsData.length; i += 1) {
    const [question, rightAnswer] = roundsData[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const generateRoundsData = (func) => {
  const roundsData = [];
  for (let i = 0; i < countOfRounds; i += 1) {
    roundsData.push(func());
  }
  return roundsData;
};

const getRandomNumber = (maxI, minI = 0) => Math.floor(Math.random() * ((maxI + 1) - minI) + minI);

export {
  runGame, countOfRounds, getRandomNumber, generateRoundsData,
};
