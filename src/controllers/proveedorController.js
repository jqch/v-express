var Proveedor = require('../models/Proveedor');
var Empresa = require('../models/Empresa');
var Sequelize = require('sequelize');
var sequelize = require('../models/database');

const controller = {}

controller.testdata = async ( req, res) => {
  
  const response = await sequelize.sync().then(function() {
     const data =  Proveedor.findAll()
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response)

}

controller.list = async ( req, res) => {

    const data = await Proveedor.findAll();
    res.json(data)

}

controller.union = async (req, res) => {
    const data = await Proveedor.findAll({
      include: [{
          model: Empresa,
          where: { id: Sequelize.col('proveedor.id') }
      }]
    })
    res.json(data)
}

module.exports = controller;