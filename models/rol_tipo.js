/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolTipo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'rol'
    },
    permisos: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'permisos'
    }
  }, {
    tableName: 'rol_tipo'
  });
};
