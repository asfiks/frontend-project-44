#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
while (count < 3) {
  const number = Math.floor(Math.random(0, 50) * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (count === 2) {
    console.log(`Congratulations, ${name}!`);
    break;
  } else if (number % 2 === 1 && answer === 'no') {
    console.log('Correct!');
    count += 1;
  } else if (number % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    count += 1;
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}`);
    break;
  }
}
