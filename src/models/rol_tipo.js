var Sequelize = require('sequelize');
var sequelize = require('./database');

var RolTipo = sequelize.define('rolTipo', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    rol: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'rol'
    },
    permisos: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'permisos'
    }
  }, {
    timestamps: false,
    tableName: 'rol_tipo'
  });

module.exports = RolTipo
