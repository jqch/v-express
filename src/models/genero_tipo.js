var Sequelize = require('sequelize');
var sequelize = require('./database');

var GeneroTipo = sequelize.define('generoTipo', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    genero: {
      type: Sequelize.STRING(15),
      allowNull: true,
      field: 'genero'
    },
    abrev: {
      type: Sequelize.STRING(2),
      allowNull: true,
      field: 'abrev'
    }
  }, {
    timestamps: false,
    tableName: 'genero_tipo'
  });

module.exports = GeneroTipo
