const express = require('./commands/express');
const react = require('./commands/react');

module.exports = (data) => {
    switch(data.projectType) {
        case 'express':
            express(data);
        break;

        case 'react':
            react(data);
        break;
    }
}