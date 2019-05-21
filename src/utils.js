const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const getGCD = (num1, num2) => {
  const divisor = num1 > num2 ? num2 : num1;
  const greater = num1 > num2 ? num1 : num2;
  for (let i = divisor; i >= 1; i -= 1) {
    if (divisor % i === 0 && greater % i === 0) {
      return i;
    }
  }
  return 1;
};
const isEven = num => num % 2 === 0;
export {
  randomInt, isEven, getGCD,
};
