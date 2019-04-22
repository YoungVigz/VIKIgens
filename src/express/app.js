const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (res, req) => {
    res.send(`Welcome in ${process.env.npm_package_name} app.`);
});

module.exports = app;