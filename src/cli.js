const chalk = require('chalk');
const shell = require('./shell');

module.exports = async (data) => {
    const projectName = data.project_name;
    
    switch(data.project_type) {
        case 'express': 
            if(data.git == 'yes'){
                const gitQuestions = require('./gitQuestions');
                shell.express(projectName, await gitQuestions());
            } else {
                shell.express(projectName, []);
            }
        break;

        case 'react':
            shell.react(projectName);
        break;

        default:
            return console.log(chalk.red.bold(`Type is invalid!`)); 
    }
}