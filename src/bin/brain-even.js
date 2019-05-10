#!/usr/bin/env node
import { startGame } from '..';
import { type, gameMethods, gameQuestions as questions } from '../games/even-data';

startGame(type, gameMethods, questions);
