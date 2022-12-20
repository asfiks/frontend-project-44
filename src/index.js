import readlineSync from 'readline-sync';

export const welcomeAndName = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  return name;
};

export const helloGamer = (nameGamer) => console.log(`Hello, ${nameGamer}!`);

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const isCorrect = () => console.log('Correct!');

export const tryAgain = (name) => console.log(`Let's try again, ${name}!`);

export const congratulations = (count, name) => {
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const question = (result) => console.log(`Question: ${result}`);

export const answerUser = () => readlineSync.question('Your answer: ');

export const error = (var1, var2) => console.log(`'${var1}' is wrong answer ;(. Correct answer was '${var2}'.`);
