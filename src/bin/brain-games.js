#!/usr/bin/env node
import { askQuestion, questions } from '../index';

console.log('Welcome to my first console game!');
const userName = askQuestion(questions.user.name);

console.log(`Hello ${userName} !`);

