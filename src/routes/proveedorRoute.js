const express = require('express');
const router = express.Router();

const ProveedorController = require('../controllers/proveedorController')

router.get('/testdata',ProveedorController.testdata );
router.get('/list',ProveedorController.list );
router.get('/union',ProveedorController.union );

module.exports = router;