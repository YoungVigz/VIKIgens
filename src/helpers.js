const figlet = require('figlet');
const chalk = require('chalk');

exports.welcome = (appName) => {
    console.log(chalk.yellow(figlet.textSync(appName)));
};