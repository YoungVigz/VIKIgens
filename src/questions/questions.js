const inquirer = require('inquirer');

exports.project_name = () => {
    return inquirer.prompt([{  
        name: 'project_name',
        type: 'input',
        message: 'Enter project name:',
        validate: (name) => {
            name = name.split(" ")[0];
            return name !== '';
        }
    }]);
}

exports.project_type = () => {
    return inquirer.prompt([{
        name: 'project_type',
        type: 'list',
        message: 'Select project type:',
        choices: ['Express', 'React'],
        filter: (val) => {
            return val.toLowerCase();
        }
    }]);
}

exports.git = () => {
    return inquirer.prompt([{
        name: 'git',
        type: 'list',
        message: 'Do you want to use git in your project?',
        choices: ['yes', 'no']
    }]);
}

exports.github_name = () => {
    return inquirer.prompt([{
        name: 'github_name',
        type: 'input',
        message: 'Enter your github user/company name:',
        validate: (name) => {
            name = name.split(" ")[0];
            return name !== '';
        }           
    }]);
}

exports.repo_name = () => {
    return inquirer.prompt([{
        name: 'repo_name',
        type: 'input',
        message: 'Enter repository name:',
        validate: (name) => {
            name = name.split(" ")[0];
            return name !== '';
        }  
    }]);
}