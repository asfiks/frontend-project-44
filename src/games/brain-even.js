import { getRandomNumber, gameEngine } from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');

export const gameQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = getAnswer(question);
  return [question, answer];
};

const startGame = () => gameEngine(gameQuestionAndAnswer, gameRule);

export default startGame;
