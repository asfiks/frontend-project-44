import { getRandomNumber, controlGame } from '../index.js';

const gameRule = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const getCalculation = (arrWithExpression) => {
  let result = 0;
  const numb1 = Number(arrWithExpression[0]);
  const numb2 = Number(arrWithExpression[2]);
  const sign = arrWithExpression[1];
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

const getAnswer = (question) => {
  const arrWithExpression = question.split(' ');
  const result = getCalculation(arrWithExpression);
  return String(result);
};

const getQuestion = () => {
  const numb1 = getRandomNumber(1, 20);
  const numb2 = getRandomNumber(1, 20);
  const sign = signs[getRandomNumber(0, signs.length)];
  return `${numb1} ${sign} ${numb2}`;
};

export const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(question);
  return [question, answer];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
