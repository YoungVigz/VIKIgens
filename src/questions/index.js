const { project_name, project_type } = require('./project')

const questions = async () => {
    const name = await project_name()
    const type = await project_type()

    const project = {
        name: name.project_name,
        type: type.project_type
    }

    return project
}

module.exports = {
    questions
}