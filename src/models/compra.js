var Sequelize = require('sequelize');
var sequelize = require('./database');

var Compra = sequelize.define('compra', {
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
    fecha: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: 'fecha'
    },
    numeroBoleta: {
      type: Sequelize.STRING(10),
      allowNull: true,
      field: 'numero_boleta'
    },
    totalCompra: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'total_compra'
    },
    totalPago: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'total_pago'
    },
    saldoPago: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'saldo_pago'
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'descripcion'
    },
    proveedorId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'id'
      },
      field: 'proveedor_id'
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
    tableName: 'compra'
  });

module.exports = Compra
