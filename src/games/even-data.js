import { randomNum, questions } from '..';

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

export { type, gameMethods, gameQuestions };
