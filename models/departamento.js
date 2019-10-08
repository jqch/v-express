/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departamento', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    departamento: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'departamento'
    },
    abrev: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'abrev'
    }
  }, {
    tableName: 'departamento'
  });
};
