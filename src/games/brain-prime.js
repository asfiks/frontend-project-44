import { getRandomNumber, gameEngine } from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswer = (numb) => {
  let count = 0;
  for (let i = 2; i <= numb; i += 1) {
    if (count > 1) {
      break;
    } else if (numb % i === 0) {
      count += 1;
    }
  }
  if (count === 1) return 'yes';
  return 'no';
};

export const gameQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 30);
  const answer = getAnswer(question);
  return [question, answer];
};

const startGame = () => gameEngine(gameQuestionAndAnswer, gameRule);

export default startGame;
