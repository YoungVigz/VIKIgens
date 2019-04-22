const inquirer = require('inquirer');

module.exports = () => {
    return inquirer.prompt([
        {
            name: 'github_name',
            type: 'input',
            message: 'Enter your github user/company name:'            
        },
        {
            name: 'repo_name',
            type: 'input',
            message: 'Enter repository name:',
        }
    ]);
};