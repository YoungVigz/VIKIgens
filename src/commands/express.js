const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');      

const packagejs = require('./files/express/package');
const app = require('./files/express/app');
const server = require('./files/express/server');
const gitignore = require('./files/gitignore');
const indexEJS = require('./files/express/indexEJS');

module.exports = (data) => { 
    shell.mkdir(data.projectName);
    shell.cd(data.projectName);
    shell.touch('app.js', 'server.js', '.gitignore', 'README.md');
    shell.mkdir('public', 'views', 'api');
  
    const path = shell.pwd();

    packagejs.name = data.projectName;
    packagejs.main = `server.js`;
    packagejs.scripts.start = `node server.js`;
    packagejs.dependencies = {
        "express": "^4.16.4",
        "body-parser": "^1.18.3",
        "ejs": "^2.6.1"
    };

    if(data.githubName) {
        if (!shell.which('git')) {
            return console.log(chalk.red('Sorry, this action requires git'));
        }
        shell.exec('git init');
        packagejs.repository.url = `git+https://github.com/${data.githubName}/${data.repoName}.git`;
        packagejs.bugs.url = `https://github.com/${data.githubName}/${data.repoName}.git/issues`;
        packagejs.homepage = `https://github.com/${data.githubName}/${data.repoName}.git#readme`;
        packagejs.author = `${data.githubName}`;
    }

    fs.writeFile(path+'/package.json', JSON.stringify(packagejs, null, 2), (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/app.js', app, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/server.js', server, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/.gitignore', gitignore, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/README.md', `## ${data.projectName}`, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
 
    shell.cd('views');
    shell.touch('index.ejs');
    fs.writeFile(path+'/views/index.ejs', indexEJS, (err) => { if(err) return console.log(chalk.red(`${err}`)); });

    console.log(chalk.green(`Done, your project should work!\n 1. cd ${data.projectName}\n 2. npm i\n 3. npm start`));
}