#!/usr/bin/env node

import { questions, gameData, gameTurn, game, userName } from '../index';
import { type, getExpression, getResult as corrAnswer } from '../games/arithprogression-data';

console.log(questions[type].rules);
const user = userName();
const data = gameData(user, gameTurn, getExpression, corrAnswer);

game(data, questions);
