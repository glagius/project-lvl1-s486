#!/usr/bin/env node

import { questions, gameData, gameTurn, game, userName } from '../index';
import { type, getExpression, isPrime as corrAnswer } from '../games/prime-data';

console.log(questions[type].rules);
const user = userName();
const data = gameData(user, gameTurn, getExpression, corrAnswer);

game(data, questions);