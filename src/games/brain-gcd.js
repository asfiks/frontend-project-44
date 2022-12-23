import { getRandomNumber, gameEngine } from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getAnswer = (question) => {
  const tempArr = question.split(' ');
  tempArr.sort();
  const [numb1, numb2] = tempArr;
  const arrResult = [];
  for (let i = 1; i <= numb1; i += 1) {
    if (numb1 % i === 0 && numb2 % i === 0) arrResult.push(i);
  }
  return String(arrResult[arrResult.length - 1]);
};

const getQuestion = () => {
  const numb1 = getRandomNumber(3, 99);
  const numb2 = getRandomNumber(3, 99);
  return `${numb1} ${numb2}`;
};

const gameQuestionAndAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(question);
  return [question, answer];
};

const startGame = () => gameEngine(gameQuestionAndAnswer, gameRule);

export default startGame;
