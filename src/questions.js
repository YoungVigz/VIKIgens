const inquirer = require('inquirer');

module.exports = () => {
    return inquirer.prompt([
        {
            name: 'project_name',
            type: 'input',
            message: 'Enter project name:',
            validate: (name) => {
                name = name.split(" ")[0];
                return name !== '';
            }         
        },
        {
            name: 'project_type',
            type: 'list',
            message: 'Select project type:',
            choices: ['Express', 'React'],
            filter: (val) => {
                return val.toLowerCase();
            }
        }
    ]);
};