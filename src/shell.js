const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');      

exports.express = (projectName, gitData) => {
    if (!shell.which('git')) {
        return console.log(chalk.red('Sorry, this action requires git'));
    }

    shell.mkdir(projectName);
    shell.cd(projectName);
    shell.touch('app.js', 'server.js', '.gitignore', 'README.md');
    shell.mkdir('public', 'views', 'api');
    shell.exec('git init');
    
    const path = shell.pwd();
    const { json, app, server, gitignore, readme, indexView } = require('./helpers');

    json.name = projectName;
    json.repository.url = `git+https://github.com/${gitData.github_name}/${gitData.repo_name}.git`;
    json.bugs.url = `https://github.com/${gitData.github_name}/${gitData.repo_name}.git/issues`;
    json.homepage = `https://github.com/${gitData.github_name}/${gitData.repo_name}.git#readme`;

    fs.writeFile(path+'/package.json', JSON.stringify(json, null, 2), (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });

    fs.writeFile(path+'/app.js', app, (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });

    fs.writeFile(path+'/server.js', server, (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });

    fs.writeFile(path+'/.gitignore', gitignore, (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });

    fs.writeFile(path+'/README.md', readme(projectName), (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });
 
    shell.cd('views');
    shell.touch('index.ejs');
    fs.writeFile(path+'/views/index.ejs', indexView, (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });

    console.log(chalk.green(`Done, your project should work!`));
    console.log(chalk.green(`1. cd ${projectName}`));
    console.log(chalk.green(`2. npm i`));
    console.log(chalk.green(`3. npm start`));
};

exports.react = (projectName) => {
    if (!shell.which('create-react-app')) {
        return console.log(chalk.red('Sorry, this action requires create-react-app'));
    }
    shell.exec('create-react-app ' + projectName);
    shell.cd(projectName);

    const path = shell.pwd();
    const { readme } = require('./helpers');

    fs.writeFile(path+'/README.md', readme(projectName), (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });

    console.log(chalk.green(`Done!`));
};
