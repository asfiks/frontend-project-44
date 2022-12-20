#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  welcomeAndName, getRandomNumber, helloGamer, isCorrect, tryAgain, congratulations, question, answerUser, error,
} from '../src/index.js';

const name = welcomeAndName();
helloGamer(name);

const arrSigns = ['+', '-', '*'];
let count = 0;

const calcRandom = (numb1, numb2, sign) => {
  numb1 = getRandomNumber(0, 20);
  numb2 = getRandomNumber(0, 20);
  sign = arrSigns[getRandomNumber(0, arrSigns.length - 1)];
  return `${numb1} ${sign} ${numb2}`;
};

while (count < 3) {
  const calcForUser = calcRandom();
  const result = eval(calcForUser);
  question(calcForUser);
  const answer = answerUser();

  if (Number(answer) === result) {
    isCorrect();
  } else {
    error(answer, result);
    tryAgain(name);
    break;
  }
  count += 1;
  congratulations(count, name);
}
