import readlineSync from 'readline-sync';

const askQuestion = (text) => readlineSync.question(text);
const getNums = (str) => str.match(/\d+/g).map(el => Number(el));
const userName = () => askQuestion(questions.user.name);
const randomNum = (grade = 100) => Math.ceil(Math.random() * grade);
const hideElement = (num, arr) => arr.map((el, index) => index === num - 1 ? el = '..' : el);

const generateNums = (init, dif, func, amount = 10) => {
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    arr.push(func(init, dif, i))
  }
  return arr;
}


const gameTurn = (turnQuestion) => {
  console.log(questions.game.q, turnQuestion);
  return askQuestion(questions.game.answer);
};

// Data for game:
// user: method witch gonna take userName
// turn: turn method
// turnQuestion: data for turn question
// corrAnswer: method witch return correct question answer
const gameData = (user, turn, turnQuestion, corrAnswer) => ({user, turn, turnQuestion, corrAnswer});
const game = (data, questions, iter = 0) => {
  if (iter === 3) {
    console.log (`${questions.game.finish}${data.user}!`)
    return;
  }

  const turnQuestion = data.turnQuestion();

  // Here is string that user writes in console
  const turnAnswer = data.turn(turnQuestion);

  const corrAnswer = data.corrAnswer(turnQuestion).toString();
  const correct = turnAnswer === corrAnswer ? true : false;
  
  if (correct) {
    console.log(questions.game.success);
    return game(data, questions, iter + 1)
  }
  console.log(`"${turnAnswer}"${questions.game.error}"${corrAnswer}"`);
  console.log(`${questions.game.continue}${data.user}!`)
  return; 
};

const questions = {
  'user': {
    'name': 'What is your name? '
  },
  'game': {
    'q': 'Question: ',
    'a': 'You answer: ',
    'success': 'Correct!',
    'finish': 'Congratulations, ',
    'error': ' is wrong answer :(. Correct answer is ',
    'continue': 'Let\'s try again, '
  },
  'even': {
    'rules': 'Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".',
  },
  'calc': {
    'rules': 'Welcome to the Brain Games! \nWhat is the result of the expression?'
  }, 
  'gcd': {
    'rules': 'Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.'
  },
  'arithprog': {
    'rules': 'Welcome to the Brain Games! \nWhat number is missing in the progresgeomprog'
  },
  'prime': {
    'rules': 'Welcome to the Brain Games! \nAnswer "yes" if given number is prime. Otherwise answer "no".'
  }
};
export  { 
  questions, 
  gameData, 
  gameTurn, 
  game, 
  userName, 
  randomNum, 
  getNums, 
  generateNums, 
  hideElement
  };