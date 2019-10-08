/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compraDetalle', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    compraId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'compra',
        key: 'id'
      },
      field: 'compra_id'
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
    precioCompra: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'precio_compra'
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cantidad'
    },
    subTotal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'sub_total'
    }
  }, {
    tableName: 'compra_detalle'
  });
};
