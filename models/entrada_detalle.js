/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradaDetalle', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    entradaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'entrada',
        key: 'id'
      },
      field: 'entrada_id'
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
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cantidad'
    }
  }, {
    tableName: 'entrada_detalle'
  });
};
