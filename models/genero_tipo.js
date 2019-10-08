/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generoTipo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    genero: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'genero'
    },
    abrev: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'abrev'
    }
  }, {
    tableName: 'genero_tipo'
  });
};
