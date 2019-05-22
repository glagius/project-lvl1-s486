import game from '..';
import randomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const makeData = () => {
  const question = randomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(makeData, description);
