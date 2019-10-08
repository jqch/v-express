/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    categoriaTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'categoria_tipo',
        key: 'id'
      },
      field: 'categoria_tipo_id'
    },
    codigo: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'codigo'
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'nombre'
    },
    modelo: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'modelo'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'descripcion'
    },
    marcaTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'marca_tipo',
        key: 'id'
      },
      field: 'marca_tipo_id'
    },
    colorTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'color_tipo',
        key: 'id'
      },
      field: 'color_tipo_id'
    },
    calidadTipoId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'calidad_tipo',
        key: 'id'
      },
      field: 'calidad_tipo_id'
    },
    costo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'costo'
    },
    porcentajeGanancia: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      field: 'porcentaje_ganancia'
    },
    precioVenta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'precio_venta'
    },
    proveedorId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'id'
      },
      field: 'proveedor_id'
    },
    activo: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'activo'
    }
  }, {
    tableName: 'producto'
  });
};
