const chalk = require('chalk');
const package = require('../package.json');

exports.help = () => {
    console.log(chalk.green(`Available args: `));
    console.log(chalk.gray(`-h \n-v shows current version of the project`));
};

exports.version = () => {
    console.log(chalk.red.bold(`\nCurrent version: ${package.version} by ${package.author}`));
}