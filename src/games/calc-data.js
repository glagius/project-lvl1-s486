import { randomNum } from '../index.js';

const type = 'calc';
const getExpressionType = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1, 4);
}
const getExpression = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const type = getExpressionType();
  const operations = {
    '1': `${num1} + ${num2}`,
    '2': `${num1} - ${num2}`,
    '3': `${num1} * ${num2}`
  };

  return operations[type];
}
const getExpressionResult = (str) => {
  const [num1, num2] = str.match(/\d+/g).map(el => Number(el));
  const [, type] = str.match(/\W/g);
  const result = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2
  };
  return result[type];
};

export { type, getExpression, getExpressionType, getExpressionResult };