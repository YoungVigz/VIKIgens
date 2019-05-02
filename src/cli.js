const express = require('./commands/express');
const react = require('./commands/react');
const adonis = require('./commands/adonis');

module.exports = (data) => {
    switch(data.projectType) {
        case 'express':
            express(data);
        break;

        case 'react':
            react(data);
        break;

        case 'adonis':
            adonis(data);
        break;
    }
}