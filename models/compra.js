/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compra', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    empresaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'id'
      },
      field: 'empresa_id'
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha'
    },
    numeroBoleta: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'numero_boleta'
    },
    totalCompra: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'total_compra'
    },
    totalPago: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'total_pago'
    },
    saldoPago: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'saldo_pago'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'descripcion'
    },
    proveedorId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'id'
      },
      field: 'proveedor_id'
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
    tableName: 'compra'
  });
};
