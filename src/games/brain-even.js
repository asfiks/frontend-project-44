import { getRandomNumber, controlGame } from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

// const getAnswer = (question) => isEven(question);

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question);
  return [question, answer];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
