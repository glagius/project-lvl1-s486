import { game, commonQuestions as questions } from '..';
import randomInt from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const makeData = () => {
  const num = randomInt();
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return { question: num, answer };
};

const startGame = () => {
  console.log(questions.greetings);
  console.log(rules);
  return game(makeData, questions);
};

export default startGame;
