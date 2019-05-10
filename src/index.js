import readlineSync from 'readline-sync';

const questions = {
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
const userName = () => askQuestion(questions.user.name);

const getNums = str => str.match(/\d+/g).map(el => Number(el));
const randomNum = (grade = 100) => Math.ceil(Math.random() * grade);

const turnQuestion = (question) => {
  console.log(questions.game.q, question);
  return askQuestion(questions.game.answer);
};

// Data for game:
// user: method witch gonna take userName
// turn: turn method
// question: data for turn question
// getAnswer: method witch return correct question answer
const gameData = (user, turn, question, answer) => ({
  user, turn, question, answer,
});
const startGame = (type, methods, gameQuestions, maxIter = 3) => {
  const { getExpression, getAnswer } = methods;
  console.log(gameQuestions[type].rules);
  const user = userName();
  const data = gameData(user, turnQuestion, getExpression, getAnswer);

  const gameTurn = (turnData, iter = 0) => {
    if (iter === maxIter) {
      console.log(`${gameQuestions.game.finish}${turnData.user}!`);
      return;
    }

    const question = turnData.question();

    // Here is string that user writes in console
    const turnAnswer = turnData.turn(question).toLowerCase();
    const correctAnswer = turnData.answer(question).toString().toLowerCase();
    const correct = turnAnswer === correctAnswer;

    if (correct) {
      console.log(gameQuestions.game.success);
      gameTurn(turnData, iter + 1);
      return;
    }
    console.log(`"${turnAnswer}"${gameQuestions.game.error}"${correctAnswer}"`);
    console.log(`${gameQuestions.game.continue}${turnData.user}!`);
  };
  return gameTurn(data);
};

export {
  questions,
  gameData,
  turnQuestion,
  userName,
  randomNum,
  getNums,
  startGame,
};
