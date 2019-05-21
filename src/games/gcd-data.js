import { game } from '..';
import { randomInt, getGCD } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const makeData = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);

  return {
    question: `${num1} ${num2}`,
    answer: getGCD(num1, num2),
  };
};

const startGame = () => game(makeData, description, 3);

export default startGame;
