import { randomNum, questions } from '..';

const type = 'arithprog';
const generateNums = (init, dif, func, amount = 10) => {
  const arr = [];
  for (let i = 1; i <= amount; i += 1) {
    arr.push(func(init, dif, i));
  }
  return arr;
};
const hideElement = (num, arr) => arr.map((el, index) => (index === num - 1 ? '..' : el));
const arithprog = (init, dif, i) => init + (i - 1) * dif;
// const geomprog = (init, dif, i) => init * dif ** (i - 1);
const currIndex = arr => arr.findIndex(el => el === ('..'));
const countDiff = (arr, index) => {
  const dir = !(index >= arr.length - 3);
  return dir ? (arr[index + 2] - arr[index + 1]) : (arr[index - 1] - arr[index - 2]);
};
const currAnswer = (arr, index, diff) => {
  if (index === 0) {
    return arr[1] - diff;
  }
  return arr[0] + diff * (index);
};

const getExpression = () => {
  const init = randomNum(10);
  const dif = randomNum(10);
  const arr = generateNums(init, dif, arithprog);
  const index = randomNum(10);
  return hideElement(index, arr);
};
const getResult = (arr) => {
  const index = currIndex(arr);
  const diff = countDiff(arr, index);
  return currAnswer(arr, index, diff);
};
const gameMethods = {
  getExpression,
  getAnswer: getResult,
};
const gameQuestions = {
  ...questions,
  arithprog: {
    rules: 'Welcome to the Brain Games! \nWhat number is missing in the progression.',
  },
};
export { type, gameMethods, gameQuestions };
