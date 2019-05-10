import { randomNum, getNums, questions } from '..';

const type = 'gcd';

const getExpression = () => {
  const num1 = randomNum();
  const num2 = randomNum();

  return `${num1} ${num2}`;
};

const getResult = (str) => {
  const [num1, num2] = getNums(str);
  let gcd;
  const divisor = num1 > num2 ? num2 : num1;
  const greater = num1 > num2 ? num1 : num2;
  for (let i = divisor; i >= 1; i -= 1) {
    if (divisor % i === 0 && greater % i === 0) {
      gcd = i;
      return gcd;
    }
  }
  return gcd;
};

const gameMethods = {
  getExpression,
  getAnswer: getResult,
};
const gameQuestions = {
  ...questions,
  gcd: {
    rules: 'Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.',
  },
};
export { type, gameMethods, gameQuestions };
