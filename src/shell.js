const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');

exports.express = (projectName, gitData) => {
    shell.mkdir(projectName);
    shell.cp('-r', process.cwd() + `/src/express/*`, projectName);
    shell.cd(projectName);
    
    const path = shell.pwd();
    const jsonFile = require(path+'/package.json');
    jsonFile.name = projectName;
    jsonFile.repository.url = `git+https://github.com/${gitData.github_name}/${gitData.repo_name}.git`;
    jsonFile.bugs.url = `https://github.com/${gitData.github_name}/${gitData.repo_name}.git/issues`;
    jsonFile.homepage = `https://github.com/${gitData.github_name}/${gitData.repo_name}.git#readme`;
    fs.writeFile(path+'/package.json', JSON.stringify(jsonFile, null, 2), (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });

    console.log(chalk.green(`Done!`));
    console.log(chalk.green(`Now run: `));
    console.log(chalk.green(`cd ${projectName}`));
    console.log(chalk.green(`npm i`));
    console.log(chalk.green(`npm start`));
};

exports.react = (projectName) => {
    if (!shell.which('create-react-app')) {
        return console.log(chalk.red('Sorry, this action requires create-react-app'));
    }

    shell.exec('create-react-app ' + projectName);
    console.log(chalk.green(`Done!`));
};
