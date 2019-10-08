var Sequelize = require('sequelize');
    var sequelize = require('./database');


var VentaDetalle = sequelize.define('ventaDetalle', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    ventaId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'venta',
        key: 'id'
      },
      field: 'venta_id'
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
    precioVenta: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'precio_venta'
    },
    cantidad: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'cantidad'
    },
    subtotal: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'subtotal'
    },
    descuento: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'descuento'
    },
    total: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'total'
    }
  }, {
    timestamps: false,
    tableName: 'venta_detalle'
  });

module.exports = VentaDetalle
