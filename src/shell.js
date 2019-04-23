const shell = require('shelljs');
const fs = require('fs');
const chalk = require('chalk');      
const { readme, gitignore, indexEJS, appExpress, serverExpress, packageExpress } = require('./helpers');

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

    packageExpress.name = projectName;
    packageExpress.repository.url = `git+https://github.com/${gitData.github_name}/${gitData.repo_name}.git`;
    packageExpress.bugs.url = `https://github.com/${gitData.github_name}/${gitData.repo_name}.git/issues`;
    packageExpress.homepage = `https://github.com/${gitData.github_name}/${gitData.repo_name}.git#readme`;

    fs.writeFile(path+'/package.json', JSON.stringify(packageExpress, null, 2), (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/app.js', appExpress, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/server.js', serverExpress, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/.gitignore', gitignore, (err) => { if(err) return console.log(chalk.red(`${err}`)); });
    fs.writeFile(path+'/README.md', readme(projectName), (err) => { if(err) return console.log(chalk.red(`${err}`)); });
 
    shell.cd('views');
    shell.touch('index.ejs');
    fs.writeFile(path+'/views/index.ejs', indexEJS, (err) => { if(err) return console.log(chalk.red(`${err}`)); });

    console.log(chalk.green(`Done, your project should work!\n 1. cd ${projectName}\n 2. npm i\n 3. npm start`));
};

exports.react = (projectName) => {
    if (!shell.which('create-react-app')) {
        return console.log(chalk.red('Sorry, this action requires create-react-app'));
    }

    shell.exec('create-react-app ' + projectName);
    shell.cd(projectName);

    const path = shell.pwd();
    fs.writeFile(path+'/README.md', readme(projectName), (err) => {
        if(err) return console.log(chalk.red(`${err}`));
    });
};
