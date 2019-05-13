import { game, commonQuestions as questions } from '..';
import { randomNum } from '../utils';

const type = 'prime';
const getExpression = () => randomNum(100);
const isPrime = (num) => {
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && i !== num) {
      return 'no';
    }
  }
  return 'yes';
};

const gameMethods = {
  getExpression,
  getAnswer: isPrime,
};
const gameQuestions = {
  ...questions,
  prime: {
    rules: 'Welcome to the Brain Games! \nAnswer "yes" if given number is prime. Otherwise answer "no".',
  },
};

const startGame = () => game(type, gameMethods, gameQuestions);

export default startGame;
