/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ventaPago', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    ventaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'venta',
        key: 'id'
      },
      field: 'venta_id'
    },
    pago: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'pago'
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'observacion'
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha'
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'hora'
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
    tableName: 'venta_pago'
  });
};
