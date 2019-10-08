var Sequelize = require('sequelize');
var sequelize = require('./database');

var CompraPago = sequelize.define('compraPago', {
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
    tableName: 'compra_pago'
  });

module.exports = CompraPago
