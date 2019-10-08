var Departamento = require('../models/departamento');
var Sequelize = require('sequelize');
var sequelize = require('../models/database');

const controller = {}

controller.list = async ( req, res) => {

    const data = await Departamento.findAll();
    res.json(data)

}

// controller.union = async (req, res) => {
//     const data = await Proveedor.findAll({
//       include: [{
//           model: Empresa,
//           where: { id: Sequelize.col('proveedor.id') }
//       }]
//     })
//     res.json(data)
// }

module.exports = controller;