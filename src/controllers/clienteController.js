var Cliente = require('../models/cliente');
var Empresa = require('../models/Empresa');
var GeneroTipo = require('../models/genero_tipo');
var Departamento = require('../models/departamento');

var Sequelize = require('sequelize');
var sequelize = require('../models/database');

const controller = {}

/*----------  Listar clientes  ----------*/

controller.list = async (req, res) => {
    const data = await Cliente.findAll({
      include: [{
          model: Empresa,
          where: { id: Sequelize.col('Cliente.empresa_id') }
      },{
          model: GeneroTipo,
          where: { id: Sequelize.col('Cliente.genero_tipo_id') }
      },{
          model: Departamento,
          where: { id: Sequelize.col('Cliente.departamento_id') }
      }]
    })
    if (data) {
    	res.json({msg: 'encontrado'})
    }else{
    	res.json(data)
    }
}

/*----------  Buscar cliente  ----------*/

controller.getCliente = async (req, res) => {
    const data = await Cliente.findByPk(req.params.id,{
      include: [{
          model: Empresa,
          where: { id: Sequelize.col('Cliente.empresa_id') }
      },{
          model: GeneroTipo,
          where: { id: Sequelize.col('Cliente.genero_tipo_id') }
      },{
          model: Departamento,
          where: { id: Sequelize.col('Cliente.departamento_id') }
      }]
    })
    res.json(data)
}



module.exports = controller;