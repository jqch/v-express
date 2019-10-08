const express = require('express');
const router = express.Router();

const empresaController = require('../controllers/empresaController')
router.get('/test',empresaController.test);

router.get('/', (req, res) => {
	res.json({status: 'Employeed Saved'});
});

module.exports = router;