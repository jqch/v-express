var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'ventasdb',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;