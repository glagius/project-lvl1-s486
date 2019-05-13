import readlineSync from 'readline-sync';

const commonQuestions = {
  user: {
    name: 'What is your name? ',
  },
  game: {
    q: 'Question: ',
    a: 'You answer: ',
    success: 'Correct!',
    finish: 'Congratulations, ',
    error: ' is wrong answer :(. Correct answer is ',
    continue: 'Let\'s try again, ',
  },
};
const askQuestion = text => readlineSync.question(text);
const userName = () => askQuestion(commonQuestions.user.name);

const turnQuestion = (question) => {
  console.log(commonQuestions.game.q, question);
  return askQuestion(commonQuestions.game.answer);
};

// Data for game:
// user: method witch gonna take userName
// turn: turn method
// question: data for turn question
// getAnswer: method witch return correct question answer
const gameData = (user, turn, question, answer) => ({
  user, turn, question, answer,
});
const gameTurn = (turnData, questions, gameLength, iter = 0) => {
  if (iter === gameLength) {
    console.log(`${questions.game.finish}${turnData.user}!`);
    return;
  }

  const question = turnData.question();

  // Here is string that user writes in console
  const turnAnswer = turnData.turn(question).toLowerCase();
  const correctAnswer = turnData.answer(question).toString().toLowerCase();
  const correct = turnAnswer === correctAnswer;

  if (correct) {
    console.log(questions.game.success);
    gameTurn(turnData, questions, gameLength, iter + 1);
    return;
  }
  console.log(`"${turnAnswer}"${questions.game.error}"${correctAnswer}"`);
  console.log(`${questions.game.continue}${turnData.user}!`);
};

const game = (type, methods, questions, maxIter = 3) => {
  const { getExpression, getAnswer } = methods;
  console.log(questions[type].rules);
  const user = userName();
  const data = gameData(user, turnQuestion, getExpression, getAnswer);
  return gameTurn(data, questions, maxIter);
};

export {
  commonQuestions,
  gameData,
  turnQuestion,
  userName,
  game,
};
