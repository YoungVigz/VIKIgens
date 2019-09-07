#!/usr/bin/env node

const { textSync } = require('figlet')
const { yellow, red } = require('chalk')
const cli = require('./src')
const { which } = require('shelljs')

const init = async () => {
    console.log(yellow(textSync('VIKIgens')))
    if(!which('git')) return console.log(red('Opsss! This app requires git'))
    await cli()
    console.log(yellow('Thanks for using VIKIgens!'))
}

init()
