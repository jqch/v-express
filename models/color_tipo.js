/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('colorTipo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    color: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'color'
    }
  }, {
    tableName: 'color_tipo'
  });
};
