import readlineSync from 'readline-sync';

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
export {
  greeting, findGCD, isPrimeNumber, calcNumbs,
};
