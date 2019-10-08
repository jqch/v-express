var Sequelize = require('sequelize');
var sequelize = require('./database');

var Venta = sequelize.define('venta', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    fechaVenta: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'fecha_venta'
    },
    numeroFactura: {
      type: Sequelize.STRING(10),
      allowNull: true,
      field: 'numero_factura'
    },
    clienteId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id'
      },
      field: 'cliente_id'
    },
    ventaTipoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'venta_tipo',
        key: 'id'
      },
      field: 'venta_tipo_id'
    },
    totalVenta: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'total_venta'
    },
    pagoVenta: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'pago_venta'
    },
    saldoVenta: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'saldo_venta'
    },
    observacion: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'observacion'
    },
    usuarioId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'usuario_id'
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
    tableName: 'venta'
  });

module.exports = Venta
