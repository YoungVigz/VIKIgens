module.exports = `const express = require('express');
const bodyParser = require('body-parser');
    
const app = express();
    
app.use(express.static('public'));
app.set('view engine', 'ejs');
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res) => res.render('index', {projectName: require('./package.json').name}));
    
module.exports = app;`;