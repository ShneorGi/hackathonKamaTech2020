const express = require('express');
const { users } = require('../api/index');

const router = express.Router();

router.post('/', users.create);
router.get('/:userId', users.get);
router.put('/:userId', users.update);
router.delete('/:userId', users.destroy);
router.post('/:userId/share/:followId', users.share);

module.exports = router;
