import { game } from '..';
import { randomInt } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && i !== num) {
      return true;
    }
  }
  return false;
};

const makeData = () => {
  const question = randomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => game(makeData, description, 3);

export default startGame;
