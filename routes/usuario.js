const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/:id', controller.user);


module.exports = router;
