import { game, commonQuestions as questions } from '..';
import { randomNum } from '../utils';

const type = 'even';

const gameMethods = {
  getExpression: randomNum,
  getAnswer: item => (item % 2 === 0 ? 'yes' : 'no'),
};
const gameQuestions = {
  ...questions,
  even: {
    rules: 'Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".',
  },
};

const startGame = () => game(type, gameMethods, gameQuestions);

export default startGame;
