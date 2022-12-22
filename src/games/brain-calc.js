import { getRandomNumber, gameEngine } from '../index.js';


const gameRule = 'What is the result of the expression?';

const arrSigns = ['+', '-', '*'];

const getAnswer = (question) => {
    const tempArr = question.split(' ');
    let result = 0;
    switch (tempArr[1]) {
        case '+':
            result = Number(tempArr[0]) + Number(tempArr[2]);
            break;
        case '-':
            result = Number(tempArr[0]) - Number(tempArr[2]);
            break;
        case '*':
            result = Number(tempArr[0]) * Number(tempArr[2]);
            break;
        default:
            break;
    }
    return result;
}


const getQuestion = () => {
    const numb1 = getRandomNumber(1, 20);
    const numb2 = getRandomNumber(1, 20);
    const sign = arrSigns[getRandomNumber(0, arrSigns.length - 1)];
    return `${numb1} ${sign} ${numb2}`;
}

export const gameQuestionAndAnswer = () => {
  const question = getQuestion();
  const answer = getAnswer(question);
  return [question, answer];
}

const startGame = () => gameEngine(gameQuestionAndAnswer, gameRule);

export default startGame;