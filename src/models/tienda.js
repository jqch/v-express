var Sequelize = require('sequelize');
var sequelize = require('./database');

var Tienda = sequelize.define('tienda', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    nombre: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'nombre'
    },
    direccion: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'direccion'
    },
    telefono: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'telefono'
    },
    departamentoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'id'
      },
      field: 'departamento_id'
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
    tableName: 'tienda'
  });

module.exports = Tienda
