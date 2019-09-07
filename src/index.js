const { questions } = require('./questions')

const cli = async () => {
    const project = await questions()

    switch(project.type) {
        case "express":
            const { express_action } = require('./actions')
            express_action(project)
        break
    }
}

module.exports = cli
