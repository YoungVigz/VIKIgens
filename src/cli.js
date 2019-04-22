const chalk = require('chalk');
const shell = require('./shell');

module.exports = async (data) => {
    const projectName = data.project_name.split(" ")[0];
    if(projectName === '') return console.log(chalk.red.bold(`Name is invalid!`));
    
    switch(data.project_type) {
        case 'express': 
            const gitQuestions = require('./gitQuestions');
            const gitData = await gitQuestions();

            if(gitData.github_name.split(" ")[0] === '' || gitData.repo_name.split(" ")[0] === '' ) return console.log(chalk.red.bold(`Git arg/args is/are invalid!`));
            
            shell.express(projectName, gitData);
        break;

        case 'react':
            shell.react(projectName);
        break;

        default:
            return console.log(chalk.red.bold(`Type is invalid!`)); 
    }
}