const express = require('express');
const { questions } = require('../api/index');

const router = express.Router();

router.get('/', questions.get);

module.exports = router;
