import readlineSync from 'readline-sync';

const commonQuestions = {
  name: 'What is your name? ',
  greetings: 'Welcome to the Brain Games!',
  q: 'Question: ',
  a: 'You answer: ',
  success: 'Correct!',
  finish: 'Congratulations, ',
  error: ' is wrong answer :(. Correct answer is ',
  continue: 'Let\'s try again, ',
};
const askQuestion = text => readlineSync.question(text);
const userName = () => askQuestion(commonQuestions.name);

const getAnswer = (question) => {
  console.log(commonQuestions.q, question);
  return askQuestion(commonQuestions.answer);
};

// Data for game:
// user: method witch gonna take userName
// turn: turn method
// question: data for turn question
// getAnswer: method witch return correct question answer
const gameTurn = (user, turnMethods, questions, gameLength, iter = 0) => {
  if (iter === gameLength) {
    console.log(`${questions.finish}${user}!`);
    return;
  }
  const { question, answer } = turnMethods();
  const turnQuestion = getAnswer(question);
  // Here is string that user writes in console
  const turnAnswer = turnQuestion.toLowerCase();
  const correctAnswer = answer.toString();
  const correct = turnAnswer === correctAnswer;

  if (correct) {
    console.log(questions.success);
    gameTurn(user, turnMethods, questions, gameLength, iter + 1);
    return;
  }
  console.log(`"${turnAnswer}"${questions.error}"${correctAnswer}"`);
  console.log(`${questions.continue}${user}!`);
};

const game = (gameMethods, questions, maxIter = 3) => {
  const user = userName();
  return gameTurn(user, gameMethods, questions, maxIter);
};

export {
  commonQuestions,
  getAnswer,
  userName,
  game,
};
