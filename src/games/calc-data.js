import { game, commonQuestions as questions } from '..';
import randomInt from '../utils';

const rules = 'What is the result of the expression?';
const getExpressionType = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1, 4);
};
const makeData = () => {
  const num1 = randomInt();
  const num2 = randomInt();
  const expressionType = getExpressionType();
  const operations = {
    1: `${num1} + ${num2}`,
    2: `${num1} - ${num2}`,
    3: `${num1} * ${num2}`,
  };
  const getResult = {
    1: (a, b) => a + b,
    2: (a, b) => a - b,
    3: (a, b) => a * b,
  };
  return {
    question: operations[expressionType],
    answer: getResult[expressionType](num1, num2),
  };
};
const startGame = () => {
  console.log(questions.greetings);
  console.log(rules);
  return game(makeData, questions);
};

export default startGame;
