import { getRandomNumber, gameEngine } from '../index.js';

const gameRule = 'What number is missing in the progression?';

const gameQuestionAndAnswer = () => {
  const pace = getRandomNumber(2, 50);
  let result = getRandomNumber(0, 50);
  const question = [];
  for (let i = 0; i < getRandomNumber(5, 9); i += 1) {
    question.push(result);
    result += pace;
  }
  const numberElement = getRandomNumber(0, question.length);
  const answer = question[numberElement];
  question[numberElement] = '..';
  return [question, String(answer)];
};

const startGame = () => gameEngine(gameQuestionAndAnswer, gameRule);

export default startGame;
