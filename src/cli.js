import readlineSync from 'readline-sync';

const whatsName = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

export default whatsName;
