var Sequelize = require('sequelize');
var sequelize = require('./database');

var CalidadTipo = sequelize.define('calidadTipo', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    calidad: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: 'calidad'
    }
  }, {
    timestamps: false,
    tableName: 'calidad_tipo'
  });

module.exports = CalidadTipo
