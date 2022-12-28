import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const controlGame = (gameQuestionAndAnswer, gameRule) => {
  let round = 0;
  const maxRounds = 3;
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  while (round < maxRounds) {
    const [question, answer] = gameQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
    round += 1;
  }
  console.log(`Congratulations, ${name}!`);
};
