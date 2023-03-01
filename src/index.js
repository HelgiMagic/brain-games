import readlineSync from 'readline-sync';

function runRound(task, rightAnswer, name, countOfRightAnswers) {
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

function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
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
function isPrimeNumber(number) {
  if (number < 2) { return 'no'; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) { return 'no'; }
  }
  return 'yes';
}
function calcNumbs(numberOne, operation, numberTwo) {
  let result = 0;
  if (operation === '+') {
    result = numberOne + numberTwo;
  } else if (operation === '-') {
    result = numberOne - numberTwo;
  } else if (operation === '*') {
    result = numberOne * numberTwo;
  }
  return result;
}
function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}
function randomNumber(maxNumIncluded, minNumIncluded = 0) {
  return Math.floor(Math.random() * ((maxNumIncluded + 1) - minNumIncluded) + minNumIncluded);
}
function hideItem(array, hiddenNumberPosition) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i !== hiddenNumberPosition) {
      result.push(array[i]);
    } else {
      result.push('..');
    }
  }
  return result;
}
function generateArray(startNumber, oneStep, length) {
  const result = [];
  for (let i = 0, currentNumber = startNumber; i < length; i += 1, currentNumber += oneStep) {
    result.push(currentNumber);
  }
  return result;
}

const countOfRounds = 3;

export {
  greeting, runRound, findGCD, isPrimeNumber, calcNumbs, countOfRounds, randomNumber, isEven, hideItem, generateArray,
};
