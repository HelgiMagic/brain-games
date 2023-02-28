import readlineSync from 'readline-sync';

function greeting() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
export { greeting };
