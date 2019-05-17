import { game, commonQuestions as questions } from '..';
import randomInt from '../utils';

const rules = 'What number is missing in the progression.';
const generateNums = (init, dif, func, amount = 10) => {
  const arr = [];
  for (let i = 1; i <= amount; i += 1) {
    arr.push(func(init, dif, i));
  }
  return arr;
};
const hideElement = (num, arr) => arr.map((el, index) => (index === num - 1 ? '..' : el));
const arithprog = (init, dif, i) => init + (i - 1) * dif;

const makeData = () => {
  const init = randomInt(1, 10);
  const dif = randomInt(1, 10);
  const arr = generateNums(init, dif, arithprog);
  const index = randomInt(1, 10);
  const question = hideElement(index, arr);
  const answer = arr[index - 1];
  return { question, answer };
};

const startGame = () => {
  console.log(questions.greetings);
  console.log(rules);
  return game(makeData, questions);
};

export default startGame;
