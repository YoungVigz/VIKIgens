const figlet = require('figlet');
const chalk = require('chalk');

exports.welcome = (appName) => {
    console.log(chalk.yellow(figlet.textSync(appName)));
};

exports.app = `const express = require('express');
const bodyParser = require('body-parser');
    
const app = express();
    
//app.use(express.static('public'));
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    
app.use('/', (res, req) => {
    res.send('Welcome in ' + process.env.npm_package_name + ' app.');
});
    
module.exports = app;`;

exports.server = `require('./app').listen(process.env.PORT || 8000, () => console.log('Server is running..'));`;

exports.json = {
    "name": "",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js"
    },
    "repository": {
        "type": "git",
        "url": ""
    },
    "author": "",
    "license": "ISC",
    "bugs": {
        "url": ""
    },
    "homepage": "",
    "dependencies": {
        "express": "^4.16.4",
        "body-parser": "^1.18.3"
    }
}