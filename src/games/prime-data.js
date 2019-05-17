import { game, commonQuestions as questions } from '..';
import randomInt from '../utils';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getDividers = (num) => {
  const dividers = [];
  for (let i = 2; i <= num; i += 1) {
    if (num % i !== 0 && i === num) {
      dividers.push(i);
    }
  }
  return dividers;
};
const isPrime = arr => (arr.length === 2 ? 'yes' : 'no');

const makeData = () => {
  const num = randomInt();
  const answer = isPrime(getDividers(num));
  return { question: num, answer };
};

const startGame = () => {
  console.log(questions.greetings);
  console.log(rules);
  return game(makeData, questions);
};

export default startGame;
