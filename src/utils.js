const getNums = str => str.match(/\d+/g).map(el => Number(el));
const randomNum = (grade = 100) => Math.ceil(Math.random() * grade);

export { getNums, randomNum };
