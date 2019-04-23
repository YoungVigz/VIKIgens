const chalk = require('chalk');
const figlet = require('figlet');

const gitignore = require('./files/gitignore');
const appExpress = require('./files/express/app');
const indexEJS = require('./files/express/indexEJS');
const serverExpress = require('./files/express/server');
const packagejs = require('./files/packagejs');

exports.welcome = (appName) => console.log(chalk.yellow(figlet.textSync(appName)));
exports.readme = (projectName) => `## ${projectName}`;

exports.gitignore = gitignore;

exports.indexEJS = indexEJS;
exports.appExpress = appExpress;
exports.serverExpress = serverExpress;
exports.packagejs = packagejs;
