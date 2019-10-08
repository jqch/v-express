const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clienteController')

router.get('/', ClienteController.list);
router.get('/:id', ClienteController.getCliente);

module.exports = router;