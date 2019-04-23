module.exports = `const port = process.env.PORT || 8000;
require('./app').listen(port, () => console.log('Server is running.. PORT:' + port));`;