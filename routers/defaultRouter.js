const express = require('express');
const router = express.Router();
const formsController = require('../controllers/formsController');

router.get('/', formsController.getJSCode);

router.get('/web/sourceCode', formsController.getJSCode);    

module.exports = router;