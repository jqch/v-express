var Sequelize = require('sequelize');
var sequelize = require('./database');

var CompraDetalle = sequelize.define('compraDetalle', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    compraId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'compra',
        key: 'id'
      },
      field: 'compra_id'
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
    precioCompra: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'precio_compra'
    },
    cantidad: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'cantidad'
    },
    subTotal: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'sub_total'
    }
  }, {
    timestamps: false,
    tableName: 'compra_detalle'
  });

module.exports = CompraDetalle
