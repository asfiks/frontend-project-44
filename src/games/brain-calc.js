import controlGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const getCalculation = (numb1, numb2, sign) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = numb1 + numb2;
      break;
    case '-':
      result = numb1 - numb2;
      break;
    case '*':
      result = numb1 * numb2;
      break;
    default:
      console.log('An error has occurred! Contact the game developer!');
  }
  return result;
};

export const getQuestionAndAnswer = () => {
  const numb1 = getRandomNumber(1, 20);
  const numb2 = getRandomNumber(1, 20);
  const sign = signs[getRandomNumber(0, signs.length)];
  const question = `${numb1} ${sign} ${numb2}`;
  const answer = getCalculation(numb1, numb2, sign);
  return [question, String(answer)];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
