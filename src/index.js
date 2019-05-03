import readlineSync from 'readline-sync';

const askQuestion = (text) => readlineSync.question(text);

const questions = {
    'user': {
      'name':'What is your name? ',
    },
    'game': {
      'q': 'Question: ',
      'a': 'You answer: ',
      'success': 'Correct!',
      'finish': 'Congratulations, '
    },
    'even': {
      'rules': 'Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".',
      'error': ' is wrong answer :(. Correct answer is ',
      'goAhead': 'Let\'s try again, ',
    },
  };
export  { askQuestion, questions };