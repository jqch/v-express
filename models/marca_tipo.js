/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marcaTipo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    marca: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'marca'
    },
    empresaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'id'
      },
      field: 'empresa_id'
    }
  }, {
    tableName: 'marca_tipo'
  });
};
