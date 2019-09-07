const { prompt } = require('inquirer')

const project_name = () => prompt([{  
    name: 'project_name',
    type: 'input',
    message: 'Enter project name:',
    validate: (name) => {
        name = name.split(" ")[0]
        return name !== ''
    }
}])


const project_type = () => prompt([{
    name: 'project_type',
    type: 'list',
    message: 'Select project type:',
    choices: ['Express'],
    filter: (val) => {
        return val.toLowerCase()
    }
}])

module.exports = {
    project_name,
    project_type
}