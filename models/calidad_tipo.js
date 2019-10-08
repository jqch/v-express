/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calidadTipo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    calidad: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'calidad'
    }
  }, {
    tableName: 'calidad_tipo'
  });
};
