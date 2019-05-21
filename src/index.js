import readlineSync from 'readline-sync';

const questions = {
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
const userName = () => askQuestion(questions.name);

const getAnswer = (question) => {
  if (question instanceof Array) {
    console.log(questions.q, ...question);
  } else {
    console.log(questions.q, question);
  }
  return askQuestion(questions.answer);
};

const gameTurn = (user, gameData, gameQuestions, gameLength, iter = 0) => {
  if (iter === gameLength) {
    console.log(`${gameQuestions.finish}${user}!`);
    return;
  }
  const { question, answer } = gameData();
  const turnQuestion = getAnswer(question);
  // Here is string that user writes in console
  const turnAnswer = turnQuestion.toLowerCase();
  const correctAnswer = answer.toString();
  const correct = turnAnswer === correctAnswer;

  if (correct) {
    console.log(gameQuestions.success);
    gameTurn(user, gameData, gameQuestions, gameLength, iter + 1);
    return;
  }
  console.log(`"${turnAnswer}"${gameQuestions.error}"${correctAnswer}"`);
  console.log(`${gameQuestions.continue}${user}!`);
};

const game = (gameData, description, maxIter) => {
  console.log(questions.greetings);
  console.log(description);

  const user = userName();
  return gameTurn(user, gameData, questions, maxIter);
};

export { userName, game };
