import { game } from '..';
import randomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeData = () => {
  const question = randomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(makeData, description);
