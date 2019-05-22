import readlineSync from 'readline-sync';

const askQuestion = text => readlineSync.question(text);
const userName = () => askQuestion('What is your name? ');
const maxIter = 3;

const getAnswer = (question) => {
  console.log('Question: ', question);
  return askQuestion('You answer: ');
};

const gameTurn = (user, gameData, iter) => {
  if (iter === maxIter) {
    console.log(`Congratulations, ${user}!`);
    return;
  }
  const { question, answer } = gameData();
  const turnQuestion = getAnswer(question);
  // Here is string that user writes in console
  const turnAnswer = turnQuestion.toLowerCase();
  const correctAnswer = answer.toString();
  const correct = turnAnswer === correctAnswer;

  if (correct) {
    console.log('Correct!');
    gameTurn(user, gameData, iter + 1);
    return;
  }
  console.log(`"${turnAnswer}" is wrong answer :(. Correct answer is "${correctAnswer}"`);
  console.log(`Let's try again, ${user}!`);
};

const game = (gameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const user = userName();
  return gameTurn(user, gameData, 0);
};

export { userName, game };
