const express = require('express');
const router = express.Router();

const ColorTipoController = require('../controllers/colorTipoController')

router.get('/list', ColorTipoController.list);

module.exports = router;