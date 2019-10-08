var Sequelize = require('sequelize');
var sequelize = require('./database');

var Entrada = sequelize.define('entrada', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    empresaId: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
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
    compraId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'compra_id'
    },
    traspasoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'traspaso_id'
    },
    origenOtro: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'origen_otro'
    },
    observacion: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'observacion'
    },
    usuarioId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'usuario_id'
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
    timestamps: false,
    tableName: 'entrada'
  });

module.exports = Entrada
