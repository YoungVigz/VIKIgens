const shell = require('shelljs')

module.exports = (project) => {
    shell.exec('git clone https://github.com/VIKIgens/express-template.git')
    shell.mv('express-template/', project.name)
}