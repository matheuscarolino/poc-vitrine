const express = require('express');
const router = express.Router();
const controller = require('../controllers/aplicacoes.controller')

router.get('/aplicacoes', controller.get );

module.exports = router;