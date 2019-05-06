import { randomNum, generateNums, hideElement } from '../index.js';

const arithprog = (init, dif, i) => init + (i-1)*dif;
// const geomprog = (init, dif, i) => init * dif ** (i - 1);
const currIndex = (arr) => arr.findIndex(el => el === ('..'))
const countDiff = (arr, indx, type = 'arith') => {
  const dir = indx >= arr.length - 3 ? false : true;
  return dir ? 
    (arr[indx + 2] - arr[indx + 1]) 
    : 
    (arr[indx - 1] - arr[indx - 2])
};
const currAnswer = (arr, indx, diff, type = 'arith') => {
  if (indx === 0) {
    return arr[1] - diff;
  }
  return arr[0] + diff*(indx)
}
const type = 'arithprog';

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
}

export { getExpression, getResult, type };