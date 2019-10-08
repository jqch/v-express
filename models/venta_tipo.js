/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ventaTipo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'tipo'
    }
  }, {
    tableName: 'venta_tipo'
  });
};
