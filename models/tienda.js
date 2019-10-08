/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nombre'
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'direccion'
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'telefono'
    },
    departamentoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'id'
      },
      field: 'departamento_id'
    },
    activo: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'activo'
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
    tableName: 'tienda'
  });
};
