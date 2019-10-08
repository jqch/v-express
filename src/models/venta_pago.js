var Sequelize = require('sequelize');
var sequelize = require('./database');

var VentaPago = sequelize.define('ventaPago', {
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
    pago: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'pago'
    },
    observacion: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'observacion'
    },
    fecha: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: 'fecha'
    },
    hora: {
      type: Sequelize.TIME,
      allowNull: true,
      field: 'hora'
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
    tableName: 'venta_pago'
  });

module.exports = VentaPago
