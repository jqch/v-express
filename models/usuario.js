/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    empresaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'id'
      },
      field: 'empresa_id'
    },
    tiendaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tienda',
        key: 'id'
      },
      field: 'tienda_id'
    },
    rolTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'rol_tipo',
        key: 'id'
      },
      field: 'rol_tipo_id'
    },
    usuario: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'usuario'
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'password'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nombre'
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'foto'
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'celular'
    },
    activo: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'activo'
    }
  }, {
    tableName: 'usuario'
  });
};
