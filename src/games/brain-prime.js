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
<<<<<<< HEAD
  if (count === 1) result = true;
=======
  if (count === 1 ) result = true;
>>>>>>> 72c442a1d0da553c63d916dab36e6a5b73f3c967
  return result;
};

const getAnswer = (numb) => {
  if (isPrime(numb)) return 'yes';
<<<<<<< HEAD
  return 'no';
=======
  else return 'no';
>>>>>>> 72c442a1d0da553c63d916dab36e6a5b73f3c967
};

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 30);
  const answer = getAnswer(question);
  return [question, answer];
};

const startGame = () => controlGame(getQuestionAndAnswer, gameRule);

export default startGame;
