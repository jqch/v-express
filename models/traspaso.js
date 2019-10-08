/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('traspaso', {
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
    tiendaOrigenId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tienda',
        key: 'id'
      },
      field: 'tienda_origen_id'
    },
    tiendaDestinoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tienda',
        key: 'id'
      },
      field: 'tienda_destino_id'
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha'
    },
    estado: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'estado'
    },
    usuarioEmisorId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'usuario_emisor_id'
    },
    usuarioReceptorId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'usuario_receptor_id'
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
    tableName: 'traspaso'
  });
};
