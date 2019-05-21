import { game } from '..';
import randomInt from '../utils';

const description = 'What number is missing in the progression.';
const generateNums = (init, dif, func, amount) => {
  const arr = [];
  for (let i = 1; i <= amount; i += 1) {
    arr.push(func(init, dif, i));
  }
  return arr;
};
const hideArrElement = (num, arr) => arr.map((el, index) => (index === num - 1 ? '..' : el));
const arithprog = (init, dif, i) => init + (i - 1) * dif;

const makeData = () => {
  const init = randomInt(1, 10);
  const dif = randomInt(1, 10);
  const arr = generateNums(init, dif, arithprog, 10);
  const hiddenElementIndex = randomInt(1, 10);
  const question = hideArrElement(hiddenElementIndex, arr);
  const answer = arr[hiddenElementIndex - 1];
  return { question, answer };
};

const startGame = () => game(makeData, description, 3);

export default startGame;
