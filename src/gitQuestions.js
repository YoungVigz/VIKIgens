const inquirer = require('inquirer');

module.exports = () => {
    return inquirer.prompt([
        {
            name: 'github_name',
            type: 'input',
            message: 'Enter your github user/company name:',
            validate: (name) => {
                name = name.split(" ")[0];
                return name !== '';
            }           
        },
        {
            name: 'repo_name',
            type: 'input',
            message: 'Enter repository name:',
            validate: (name) => {
                name = name.split(" ")[0];
                return name !== '';
            }  
        }
    ]);
};