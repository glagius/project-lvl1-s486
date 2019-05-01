import readlineSync from 'readline-sync';

const askQuestion = (text) => readlineSync.question(text);

const questions = [
  {
    'userName': 'What is your name? '
  }
];

export  { askQuestion, questions };