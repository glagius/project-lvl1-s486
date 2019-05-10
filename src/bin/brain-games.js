#!/usr/bin/env node
import { userName } from '..';

console.log('Welcome to my first console game!');
const user = userName();

console.log(`Hello ${user} !`);
