/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('traspasoDetalle', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    traspasoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'traspaso',
        key: 'id'
      },
      field: 'traspaso_id'
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
    tableName: 'traspaso_detalle'
  });
};
