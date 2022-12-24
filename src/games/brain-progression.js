import { getRandomNumber, gameEngine } from '../index.js';

const gameRule = 'What number is missing in the progression?';

const gameQuestionAndAnswer = () => {
  const pace = getRandomNumber(2, 50);
  let result = getRandomNumber(0, 50);
  const questionArr = [];
  for (let i = 0; i < getRandomNumber(6, 9); i += 1) {
    questionArr.push(result);
    result += pace;
  }
  const numberElement = getRandomNumber(0, questionArr.length);
  const answer = questionArr[numberElement];
  questionArr[numberElement] = '..';
  const question = questionArr.join(' ');
  return [question, String(answer)];
};

const startGame = () => gameEngine(gameQuestionAndAnswer, gameRule);

export default startGame;
