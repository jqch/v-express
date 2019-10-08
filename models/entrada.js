/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entrada', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    empresaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    compraId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'compra_id'
    },
    traspasoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'traspaso_id'
    },
    origenOtro: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'origen_otro'
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'observacion'
    },
    usuarioId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'usuario_id'
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
    tableName: 'entrada'
  });
};
