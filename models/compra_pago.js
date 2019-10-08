/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compraPago', {
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
    tableName: 'compra_pago'
  });
};
