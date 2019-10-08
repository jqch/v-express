var Sequelize = require('sequelize');
    var sequelize = require('./database');


var Usuario = sequelize.define('usuario', {
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
    tiendaId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tienda',
        key: 'id'
      },
      field: 'tienda_id'
    },
    rolTipoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'rol_tipo',
        key: 'id'
      },
      field: 'rol_tipo_id'
    },
    usuario: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'usuario'
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'password'
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
      field: 'email'
    },
    nombre: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'nombre'
    },
    foto: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'foto'
    },
    celular: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'celular'
    },
    activo: {
      type: Sequelize.INTEGER(4),
      allowNull: true,
      field: 'activo'
    }
  }, {
    timestamps: false,
    tableName: 'usuario'
  });

module.exports = Usuario
