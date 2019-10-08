var Sequelize = require('sequelize');
var sequelize = require('./database');

var CategoriaTipo = sequelize.define('categoriaTipo', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    categoria: {
      type: Sequelize.STRING(150),
      allowNull: true,
      field: 'categoria'
    },
    activo: {
      type: Sequelize.INTEGER(4),
      allowNull: true,
      field: 'activo'
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
    tableName: 'categoria_tipo'
  });

module.exports = CategoriaTipo
