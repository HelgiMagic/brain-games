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
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) { return false; }
  }
  return number > 1;
}
export { greeting, findGCD, isPrimeNumber };
