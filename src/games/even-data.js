import game from '..';
import { randomInt, isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const makeData = () => {
  const question = randomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => game(makeData, description, 3);

export default startGame;
