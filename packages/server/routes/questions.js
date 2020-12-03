const express = require('express');
const { questions } = require('../api/index');

const router = express.Router();

router.post('/', questions.create);
router.get('/:questionId', questions.get);
router.put('/:questionId', questions.update);
router.delete('/:questionId', questions.destroy);
module.exports = router;
