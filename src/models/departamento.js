var Sequelize = require('sequelize');
var sequelize = require('./database');

var Departamento = sequelize.define('departamento', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    departamento: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'departamento'
    },
    abrev: {
      type: Sequelize.STRING(3),
      allowNull: true,
      field: 'abrev'
    }
  }, {
    timestamps: false,
    tableName: 'departamento'
  });

module.exports = Departamento
