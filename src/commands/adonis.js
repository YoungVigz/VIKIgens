const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');      

const packagejs = require('./files/adonis/package');

module.exports = (data) => {
    if(!shell.which('adonis')) return console.log(chalk.red('Sorry, this action requires adonis'));

    shell.exec('adonis new ' + data.projectName);
    shell.cd(data.projectName);
    
    const path = shell.pwd();
    packagejs.name = data.projectName;

    if(data.githubName) {
        if (!shell.which('git')) return console.log(chalk.red('Sorry, this action requires git'));
        
        shell.exec('git init');
        packagejs.repository.url = `git+https://github.com/${data.githubName}/${data.repoName}.git`;
        packagejs.bugs.url = `https://github.com/${data.githubName}/${data.repoName}.git/issues`;
        packagejs.homepage = `https://github.com/${data.githubName}/${data.repoName}.git#readme`;
        packagejs.author = `${data.githubName}`;
    }

    fs.writeFile(path+'/package.json', JSON.stringify(packagejs, null, 2), (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/README.md', `## ${data.projectName}`, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
   
}