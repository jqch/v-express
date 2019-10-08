/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ventaDetalle', {
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
    productoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'producto',
        key: 'id'
      },
      field: 'producto_id'
    },
    precioVenta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'precio_venta'
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cantidad'
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'subtotal'
    },
    descuento: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'descuento'
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'total'
    }
  }, {
    tableName: 'venta_detalle'
  });
};
