import controlGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  let answer = 'no';
  if (isEven(question)) answer = 'yes';
  return [question, answer];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
