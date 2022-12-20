#!/usr/bin/env node
import { welcomeAndName, helloGamer } from '../src/index.js';
import { rulesGame, isEven } from '../src/games/brain-even.js';

const name = welcomeAndName();
rulesGame();
helloGamer(name);
isEven(name);
