var Sequelize = require('sequelize');
var sequelize = require('./database');

var Inventario = sequelize.define('inventario', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    empresaId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'id'
      },
      field: 'empresa_id'
    },
    tiendaId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tienda',
        key: 'id'
      },
      field: 'tienda_id'
    },
    productoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'producto',
        key: 'id'
      },
      field: 'producto_id'
    },
    stock: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'stock'
    },
    stockMinimo: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'stock_minimo'
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    timestamps: false,
    tableName: 'inventario'
  });

module.exports = Inventario
