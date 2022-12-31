import controlGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (beginProgression, stepProgression, lengthProgression) => {
  const progression = [];
  let elementProgression = beginProgression;
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(elementProgression);
    elementProgression += stepProgression;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const beginProgression = getRandomNumber(0, 50);
  const stepProgression = getRandomNumber(2, 50);
  const lengthProgression = getRandomNumber(6, 9);
  const progression = getProgression(beginProgression, stepProgression, lengthProgression);
  const numberElement = getRandomNumber(0, progression.length);
  const answer = progression[numberElement];
  progression[numberElement] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
