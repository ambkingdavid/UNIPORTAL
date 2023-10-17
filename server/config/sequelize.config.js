const { Sequelize } = require('sequelize');

// Define Sequelize models
const dbClient = new Sequelize({
  dialect: 'sqlite',
  storage: './var/db/university_portal.db',
  logging: false,
});

module.exports = dbClient;
