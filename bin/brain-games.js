#!/usr/bin/env node
import { welcomeAndName, helloGamer } from '../src/index.js';

const name = welcomeAndName();
helloGamer(name);
