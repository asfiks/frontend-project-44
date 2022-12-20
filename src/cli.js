import readlineSync from 'readline-sync';
import { welcomeAndName, helloGamer } from './index.js';

const name = welcomeAndName();

helloGamer(name);
