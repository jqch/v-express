var Sequelize = require('sequelize');
var sequelize = require('./database');

var Color = sequelize.define('colorTipo', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    color: {
      type: Sequelize.STRING(100),
      allowNull: false,
      field: 'color'
    }
  }, {
    timestamps: false,
    tableName: 'color_tipo'
  });

module.exports = Color
