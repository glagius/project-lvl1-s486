import { game } from '..';
import { randomInt } from '../utils';

const description = 'What is the result of the expression?';

const makeData = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);
  const expressionIndex = randomInt(0, 2);
  const makeExpression = (a, b, sign) => `${a} ${sign} ${b}`;
  const signs = ['+', '-', '*'];
  const expressions = {
    0: (a, b) => a + b,
    1: (a, b) => a - b,
    2: (a, b) => a * b,
  };
  console.log('expT = ', expressionIndex, 'Exp = ', expressions[expressionIndex]);
  return {
    question: makeExpression(num1, num2, signs[expressionIndex]),
    answer: expressions[expressionIndex](num1, num2),
  };
};
const startGame = () => game(makeData, description, 3);

export default startGame;
