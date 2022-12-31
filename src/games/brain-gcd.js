import controlGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (numb1, numb2) => {
  const result = [];
  for (let i = 1; i <= numb1; i += 1) {
    if (numb1 % i === 0 && numb2 % i === 0) result.push(i);
  }
  return result[result.length - 1];
};

const getQuestionAndAnswer = () => {
  const numb1 = getRandomNumber(3, 99);
  const numb2 = getRandomNumber(3, 99);
  const question = `${numb1} ${numb2}`;
  const answer = getGreatestDivisor(numb1, numb2);
  return [question, String(answer)];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
