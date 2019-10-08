var ColorTipo = require('../models/color_tipo');
var Sequelize = require('sequelize');
var sequelize = require('../models/database');

const controller = {}

controller.list = async ( req, res) => {

    const data = await ColorTipo.findAll();
    res.json(data)

}

module.exports = controller;