import { game, commonQuestions as questions } from '..';
import randomInt from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const makeData = () => {
  const num1 = randomInt();
  const num2 = randomInt();
  let gcd;
  const divisor = num1 > num2 ? num2 : num1;
  const greater = num1 > num2 ? num1 : num2;
  for (let i = divisor; i >= 1; i -= 1) {
    if (divisor % i === 0 && greater % i === 0) {
      gcd = i;
      break;
    }
  }
  return {
    question: `${num1} ${num2}`,
    answer: gcd,
  };
};

const startGame = () => {
  console.log(questions.greetings);
  console.log(rules);
  return game(makeData, questions);
};

export default startGame;
