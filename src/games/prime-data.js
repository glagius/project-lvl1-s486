import { randomNum } from '../index'

const type = 'prime';
const getExpression = () => randomNum(100);

const isPrime = (num) => {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && i !== num) {
      return 'no'; 
    }
  }
  return 'yes';
};

export { getExpression, isPrime, type}