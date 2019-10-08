var Sequelize = require('sequelize');
var sequelize = require('./database');

var Empresa = require('./Empresa');
var GeneroTipo = require('./genero_tipo');
var Departamento = require('./departamento');

var Cliente = sequelize.define('cliente', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    empresaId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'id'
      },
      field: 'empresa_id'
    },
    carnet: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'carnet'
    },
    nit: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'nit'
    },
    nombre: {
      type: Sequelize.STRING(100),
      allowNull: true,
      field: 'nombre'
    },
    paterno: {
      type: Sequelize.STRING(50),
      allowNull: true,
      field: 'paterno'
    },
    materno: {
      type: Sequelize.STRING(50),
      allowNull: true,
      field: 'materno'
    },
    telefono: {
      type: Sequelize.STRING(15),
      allowNull: true,
      field: 'telefono'
    },
    celular: {
      type: Sequelize.STRING(10),
      allowNull: true,
      field: 'celular'
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
      field: 'email'
    },
    foto: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'foto'
    },
    fechaNacimiento: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: 'fecha_nacimiento'
    },
    generoTipoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'genero_tipo',
        key: 'id'
      },
      field: 'genero_tipo_id'
    },
    direccion: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'direccion'
    },
    departamentoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'id'
      },
      field: 'departamento_id'
    },
    activo: {
      type: Sequelize.INTEGER(4),
      allowNull: true,
      field: 'activo'
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'cliente'
  });

Cliente.belongsTo(Empresa)
Cliente.belongsTo(GeneroTipo)
Cliente.belongsTo(Departamento)

module.exports = Cliente
