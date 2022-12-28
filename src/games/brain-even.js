import { getRandomNumber, controlGame } from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

<<<<<<< HEAD
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

// const getAnswer = (question) => isEven(question);
=======
const isEven  = (number) => (number % 2 === 0 ? 'yes' : 'no');

//const getAnswer = (question) => isEven(question);
>>>>>>> 72c442a1d0da553c63d916dab36e6a5b73f3c967

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question);
  return [question, answer];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
