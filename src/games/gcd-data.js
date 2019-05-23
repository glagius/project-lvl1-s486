import game from '..';
import randomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (num1, num2) => {
  const divider = Math.min(num1, num2);
  const greater = Math.max(num1, num2);
  for (let i = divider; i >= 1; i -= 1) {
    if (divider % i === 0 && greater % i === 0) {
      return i;
    }
  }
  return 1;
};

const makeData = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);

  return {
    question: `${num1} ${num2}`,
    answer: getGCD(num1, num2),
  };
};

export default () => game(makeData, description);
