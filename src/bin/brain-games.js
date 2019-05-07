#!/usr/bin/env node
import { userName } from '../index';

console.log('Welcome to my first console game!');
const user = userName();

console.log(`Hello ${user} !`);

