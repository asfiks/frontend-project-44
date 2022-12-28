import { getRandomNumber, controlGame } from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  let count = 0;
  let result = false;
  for (let i = 2; i <= numb; i += 1) {
    if (count > 1) {
      break;
    } else if (numb % i === 0) {
      count += 1;
    }
  }
  if (count === 1 ) result = true;
  return result;
};

const getAnswer = (numb) => {
  if (isPrime(numb)) return 'yes';
  else return 'no';
};

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 30);
  const answer = getAnswer(question);
  return [question, answer];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
