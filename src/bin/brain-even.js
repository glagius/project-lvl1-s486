#!/usr/bin/env node
import { askQuestion, questions } from '../index';

const type = 'even';

console.log(questions[type].rules);

const userName = askQuestion(questions.user.name);
console.log(`Hello ${userName} !`);

const game = (type, iter = 0) => {
  if (iter === 3) {
    console.log (`${questions.game.finish}${userName}!`)
    return;
  }

  const turnQuestion = Math.ceil(Math.random() * 100);
  const turn = () => {
    console.log(questions.game.q, turnQuestion);
    return askQuestion(questions.game.answer);
  };
  const answer = turn();
  const isEven = turnQuestion % 2 === 0 ? true : false;
  const turnAnswer = isEven ? 'yes' : 'no';
  const yes = answer === turnAnswer ? true : false;
  
  if (yes) {
    console.log(questions.game.success);
    return game(type, iter + 1)
  }
  console.log(`"${answer}"${questions[type].error}${isEven ? 'yes' : 'no'}`);
  console.log(`${questions[type].goAhead}${userName}!`)
  return; 
}
game(type)