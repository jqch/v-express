var Sequelize = require('sequelize');
var sequelize = require('./database');
// import model for FK roleID
var Empresa = require('./Empresa');

var Proveedor = sequelize.define('proveedor', {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  nit: Sequelize.STRING,
  rason_social: Sequelize.STRING,
  direccion: Sequelize.STRING,
  telefono: Sequelize.STRING,
  celular: Sequelize.STRING,
  correo: Sequelize.STRING,
  descripcion: Sequelize.STRING,
  activo: Sequelize.BOOLEAN,
  empresa_id: {
    type: Sequelize.INTEGER,
    // This is a reference to another model
    references: {
      model: Empresa,
      key: 'id'
    }
  }
},
{
	 timestamps: false,
   tableName: 'proveedor',
   underscored: true
});

Proveedor.belongsTo(Empresa)

module.exports = Proveedor