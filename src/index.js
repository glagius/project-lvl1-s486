import readlineSync from 'readline-sync';

const roundsAmount = 3;

const getAnswer = (question) => {
  console.log('Question: ', question);
  return readlineSync.question('You answer: ');
};
const startRound = (gameData) => {
  const { question, answer } = gameData();
  const turnQuestion = getAnswer(question);
  const turnAnswer = turnQuestion.toLowerCase();
  const isCorrectAnswer = turnAnswer === answer;

  if (isCorrectAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${turnAnswer}" is wrong answer :(. Correct answer is "${answer}"`);
  return false;
};
const game = (gameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const user = readlineSync.question('What is your name? ');
  for (let i = 0; i <= roundsAmount; i += 1) {
    if (!startRound(gameData)) {
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
};

export default game;
