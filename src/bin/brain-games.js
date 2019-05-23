#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to my first console game!');
const user = readlineSync.question('What is your name? ');

console.log(`Hello ${user} !`);
