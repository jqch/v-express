var Sequelize = require('sequelize');
    var sequelize = require('./database');


var Traspaso = sequelize.define('traspaso', {
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
    tiendaOrigenId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tienda',
        key: 'id'
      },
      field: 'tienda_origen_id'
    },
    tiendaDestinoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tienda',
        key: 'id'
      },
      field: 'tienda_destino_id'
    },
    fecha: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: 'fecha'
    },
    estado: {
      type: Sequelize.STRING(15),
      allowNull: true,
      field: 'estado'
    },
    usuarioEmisorId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'usuario_emisor_id'
    },
    usuarioReceptorId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'usuario_receptor_id'
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
    tableName: 'traspaso'
  });

module.exports = Traspaso
