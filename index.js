#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');
const questions = require('./src/questions/questionsManager');

const run = () => {
    console.log(chalk.yellow(figlet.textSync(require('./package.json').name || 'VIKIgens')));
    questions();
};

run();