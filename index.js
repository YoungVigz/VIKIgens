#!/usr/bin/env node

const { welcome } = require('./src/helpers');
const questions = require('./src/questions');
const cli = require('./src/cli');

const appName = process.env.npm_package_name || 'ERROR';

const run = async () => {
    welcome(appName);
    cli(await questions());
};

run();