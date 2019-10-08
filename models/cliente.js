/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
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
    carnet: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'carnet'
    },
    nit: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'nit'
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'nombre'
    },
    paterno: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'paterno'
    },
    materno: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'materno'
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'telefono'
    },
    celular: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'celular'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'foto'
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_nacimiento'
    },
    generoTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'genero_tipo',
        key: 'id'
      },
      field: 'genero_tipo_id'
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'direccion'
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'cliente'
  });
};
