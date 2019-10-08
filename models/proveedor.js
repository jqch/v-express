/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedor', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    nit: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'nit'
    },
    rasonSocial: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'rason_social'
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
    celular: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'celular'
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'correo'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'descripcion'
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
    tableName: 'proveedor'
  });
};
