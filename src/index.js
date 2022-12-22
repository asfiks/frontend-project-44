import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const gameEngine = (gameQuestionAndAnswer, gameRule) => {
  let count = 0;
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  while (count < 3) {
    const [question, answer] = gameQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer == userAnswer) {
      console.log('Correct!')
      
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`)
      return;
    }
    count += 1;
  }
  return console.log(`Congratulations, ${name}!`);
}

