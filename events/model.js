const { Sequelize } = require('sequelize');
const sequelize = require('../db');

const Event = sequelize.define(
    'Events',
    {
        Data: 
        {
            type: Sequelize.JSONB,
        }
    }
);

module.exports = Event;