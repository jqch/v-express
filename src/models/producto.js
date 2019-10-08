var Sequelize = require('sequelize');
var sequelize = require('./database');

var Producto = sequelize.define('producto', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    categoriaTipoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'categoria_tipo',
        key: 'id'
      },
      field: 'categoria_tipo_id'
    },
    codigo: {
      type: Sequelize.STRING(10),
      allowNull: true,
      field: 'codigo'
    },
    nombre: {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'nombre'
    },
    modelo: {
      type: Sequelize.STRING(20),
      allowNull: true,
      field: 'modelo'
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: true,
      field: 'descripcion'
    },
    marcaTipoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'marca_tipo',
        key: 'id'
      },
      field: 'marca_tipo_id'
    },
    colorTipoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'color_tipo',
        key: 'id'
      },
      field: 'color_tipo_id'
    },
    calidadTipoId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'calidad_tipo',
        key: 'id'
      },
      field: 'calidad_tipo_id'
    },
    costo: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'costo'
    },
    porcentajeGanancia: {
      type: Sequelize.INTEGER(255),
      allowNull: true,
      field: 'porcentaje_ganancia'
    },
    precioVenta: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'precio_venta'
    },
    proveedorId: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'id'
      },
      field: 'proveedor_id'
    },
    activo: {
      type: Sequelize.INTEGER(4),
      allowNull: true,
      field: 'activo'
    }
  }, {
    timestamps: false,
    tableName: 'producto'
  });

module.exports = Producto
