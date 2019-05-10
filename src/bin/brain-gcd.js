#!/usr/bin/env node

import { startGame } from '..';
import { type, gameMethods, gameQuestions as questions } from '../games/gcd-data';

startGame(type, gameMethods, questions);
