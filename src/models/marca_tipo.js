var Sequelize = require('sequelize');
var sequelize = require('./database');

var MarcoTipo = sequelize.define('marcaTipo', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    marca: {
      type: Sequelize.STRING(100),
      allowNull: true,
      field: 'marca'
    },
    empresaId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'id'
      },
      field: 'empresa_id'
    }
  }, {
    timestamps: false,
    tableName: 'marca_tipo'
  });

module.exports = MarcoTipo
