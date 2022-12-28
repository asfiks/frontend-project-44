import { getRandomNumber, controlGame } from '../index.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = () => {
  const step = getRandomNumber(2, 50);
  let startNumber = getRandomNumber(0, 50);
  const progression = [];
  for (let i = 0; i < getRandomNumber(6, 9); i += 1) {
    progression.push(startNumber);
    startNumber += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const numberElement = getRandomNumber(0, progression.length);
  const answer = progression[numberElement];
  progression[numberElement] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
