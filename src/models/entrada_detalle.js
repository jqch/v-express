var Sequelize = require('sequelize');
var sequelize = require('./database');

var EntradaDetalle = sequelize.define('entradaDetalle', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    entradaId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'entrada',
        key: 'id'
      },
      field: 'entrada_id'
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
    tableName: 'entrada_detalle'
  });

module.exports = EntradaDetalle
