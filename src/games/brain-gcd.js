import { getRandomNumber, controlGame } from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (numb1, numb2) => {
  const result = [];
  for (let i = 1; i <= numb1; i += 1) {
    if (numb1 % i === 0 && numb2 % i === 0) result.push(i);
  }
  return result[result.length - 1];
};

const getAnswer = (question) => {
  const numbers = question.split(' ');
  numbers.sort();
  const [numb1, numb2] = numbers;
  const result = getGreatestDivisor(numb1, numb2);
  return String(result);
};

const getQuestion = () => {
  const numb1 = getRandomNumber(3, 99);
  const numb2 = getRandomNumber(3, 99);
  return `${numb1} ${numb2}`;
};

const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(question);
  return [question, answer];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
