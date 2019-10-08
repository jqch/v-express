var Sequelize = require('sequelize');
var sequelize = require('./database');

var TraspasoDetalle = sequelize.define('traspasoDetalle', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    traspasoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'traspaso',
        key: 'id'
      },
      field: 'traspaso_id'
    },
    productoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'producto',
        key: 'id'
      },
      field: 'producto_id'
    },
    cantidad: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      field: 'cantidad'
    }
  }, {
    timestamps: false,
    tableName: 'traspaso_detalle'
  });

module.exports = TraspasoDetalle
