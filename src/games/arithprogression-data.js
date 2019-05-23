import game from '..';
import randomInt from '../utils';

const description = 'What number is missing in the progression.';
const length = 10;
const generateNums = (init, dif, amount) => {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    arr.push((init + i) * dif);
  }
  return arr;
};
const hideArrElement = (num, arr) => arr.map((el, index) => (index === num ? '..' : el));

const makeData = () => {
  const init = randomInt(1, 10);
  const dif = randomInt(1, 10);
  const arr = generateNums(init, dif, length);
  const hiddenElementIndex = randomInt(0, length);
  const question = hideArrElement(hiddenElementIndex, arr).join(' ');
  const answer = arr[hiddenElementIndex].toString();
  return { question, answer };
};

export default () => game(makeData, description);
