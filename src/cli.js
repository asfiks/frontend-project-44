import readlineSync from 'readline-sync';

export const whatsName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const hello = () => {
  return `Hello, ${whatsName()}!`;
};

export const welcome = () => {
  return 'Welcome to the Brain Games!';
};