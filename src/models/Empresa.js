var Sequelize = require('sequelize');
var sequelize = require('./database');

var Empresa = sequelize.define('empresa', {
  	id: {
  	      type: Sequelize.INTEGER,
  	      primaryKey: true,
  	      autoIncrement: true,
  	},
  	rubro: Sequelize.STRING,
  	razon_social: Sequelize.STRING,
  	logo: Sequelize.STRING,
  	telefono: Sequelize.STRING,
  	celular: Sequelize.STRING,
  	email: Sequelize.STRING,
  	descripcion: Sequelize.STRING,
  	llave: Sequelize.STRING
},
{
	timestamps: false,
	tableName: 'empresa'
});

module.exports = Empresa