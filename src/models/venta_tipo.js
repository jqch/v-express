var Sequelize = require('sequelize');
var sequelize = require('./database');

var VentaTipo = sequelize.define('ventaTipo', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    tipo: {
      type: Sequelize.STRING(10),
      allowNull: false,
      field: 'tipo'
    }
  }, {
    timestamps: false,
    tableName: 'venta_tipo'
  });

module.exports = VentaTipo
