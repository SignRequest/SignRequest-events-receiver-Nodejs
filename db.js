const { Sequelize } = require('sequelize');
const databaseUrl = process.env.DATABASE_URL || 'postgres://:<YOUR_PASSWORD>@localhost:<YOUR_PORT>/postgres';

const db = new Sequelize(databaseUrl)

db
.sync( {force: true} )
.then(() => console.log('Database schema updated'))
.catch(console.error);

module.exports = db;