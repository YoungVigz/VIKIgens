#!/usr/bin/env node

const { welcome } = require('./src/helpers');
const questions = require('./src/questions');
const cli = require('./src/cli');

const package = require('./package.json');
const appName = package.name || 'VIKIgens';

const run = async () => {
    welcome(appName);
    cli(await questions());
};

run();