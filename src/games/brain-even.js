import readlineSync from 'readline-sync';
import {
  welcomeAndName, getRandomNumber, helloGamer, isCorrect, tryAgain, congratulations, question, answerUser, error,
} from '../index.js';

export const rulesGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const isEven = (name) => {
  let count = 0;
  while (count < 3) {
    const number = getRandomNumber(1, 100);
    question(number);
    const answer = answerUser();
    if (number % 2 === 1 && answer === 'no') {
      isCorrect();
    } else if (number % 2 === 0 && answer === 'yes') {
      isCorrect();
    } else {
      error(answer, 'no');
      tryAgain(name);
      break;
    }
    count += 1;
    congratulations(count, name);
  }
};
