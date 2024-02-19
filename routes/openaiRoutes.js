const express = require('express');
const openaiController = require('../controllers/openaiController');
const router = express.Router();

router.post('/readContract', openaiController.readContract);

module.exports = router;