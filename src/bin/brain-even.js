#!/usr/bin/env node
import { questions, gameData, gameTurn, game, userName, randomNum } from '../index';
import { type, corrAnswer } from '../games/even-data.js';

console.log(questions[type].rules);
const user = userName();
const data = gameData(user, gameTurn, randomNum, corrAnswer);

game(data, questions);
