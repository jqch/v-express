/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('venta', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    fechaVenta: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_venta'
    },
    numeroFactura: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'numero_factura'
    },
    clienteId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id'
      },
      field: 'cliente_id'
    },
    ventaTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'venta_tipo',
        key: 'id'
      },
      field: 'venta_tipo_id'
    },
    totalVenta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'total_venta'
    },
    pagoVenta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'pago_venta'
    },
    saldoVenta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'saldo_venta'
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'observacion'
    },
    usuarioId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'usuario_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'venta'
  });
};
